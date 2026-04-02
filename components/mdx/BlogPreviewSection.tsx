import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function BlogPreviewSection() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="bg-slate-50 px-6 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 md:text-base">
            BLOG
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            再現性から考える、
            <br className="hidden sm:block" />
            ゴルフ上達の読みもの。
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            Hi Golfのブログでは、スイングの表面的な話ではなく、
            上達が続かない構造そのものを整理していきます。
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {post.category}
              </p>

              <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-900 group-hover:text-slate-700">
                {post.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {post.excerpt}
              </p>

              <p className="mt-4 text-xs text-slate-400">{post.date}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            ブログ一覧を見る
          </Link>
        </div>
      </div>
    </section>
  );
}