import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import BlogCallout from "@/components/mdx/BlogCallout";
import BlogCTA from "@/components/mdx/BlogCTA";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({
    slug,
  }));
}

const mdxComponents = {
  BlogCallout,
  BlogCTA,
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white px-6 py-16 text-slate-900">
      <div className="mx-auto max-w-3xl">
        <header className="border-b border-slate-200 pb-8">
          <p className="text-sm text-slate-500">
            {post.meta.date} / {post.meta.category}
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            {post.meta.title}
          </h1>

          {post.meta.excerpt && (
            <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
              {post.meta.excerpt}
            </p>
          )}
        </header>

        <article className="prose prose-slate mt-10 max-w-none lg:prose-lg prose-headings:font-bold prose-headings:tracking-tight prose-li:marker:text-slate-400 prose-li:marker:text-base prose-li:pl-2 prose-p:leading-8 prose-li:leading-8">
          <MDXRemote source={post.content} components={mdxComponents} />
        </article>
      </div>
    </main>
  );
}