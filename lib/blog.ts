import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content', 'blog')

export type BlogPostMeta = {
  title: string
  date: string
  excerpt: string
  category: string
  slug: string
  order?: number
  published?: boolean
}

export type BlogPost = {
  meta: BlogPostMeta
  content: string
}

function isMdxFile(fileName: string): boolean {
  return fileName.endsWith('.mdx')
}

function getSlugFromFileName(fileName: string): string {
  return fileName.replace(/\.mdx$/, '')
}

function parsePostMeta(slug: string, data: Record<string, unknown>): BlogPostMeta {
  return {
    title: typeof data.title === 'string' ? data.title : slug,
    date: typeof data.date === 'string' ? data.date : '',
    excerpt: typeof data.excerpt === 'string' ? data.excerpt : '',
    category: typeof data.category === 'string' ? data.category : '',
    slug,
    published: typeof data.published === 'boolean' ? data.published : true,
    order: typeof data.order === 'number' ? data.order : 999, // ←追加
  }
}

function getSortedDateValue(date: string): number {
  const time = new Date(date).getTime()
  return Number.isNaN(time) ? 0 : time
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  return fs
    .readdirSync(postsDirectory)
    .filter(isMdxFile)
    .map(getSlugFromFileName)
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const files = fs.readdirSync(postsDirectory).filter(isMdxFile)

  const posts = files.map((file) => {
    const slug = getSlugFromFileName(file)
    const fullPath = path.join(postsDirectory, file)
    const raw = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(raw)

    return parsePostMeta(slug, data as Record<string, unknown>)
  })

  return posts
    .filter((post) => post.published !== false)
    .sort((a, b) => {
      // ★ order優先ソート
      const orderDiff = (a.order ?? 999) - (b.order ?? 999)
      if (orderDiff !== 0) return orderDiff

      // ★ 同orderの場合は日付で並び替え（新しい順）
      return getSortedDateValue(b.date) - getSortedDateValue(a.date)
    })
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const raw = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(raw)
  const meta = parsePostMeta(slug, data as Record<string, unknown>)

  if (meta.published === false) {
    return null
  }

  return {
    meta,
    content,
  }
}