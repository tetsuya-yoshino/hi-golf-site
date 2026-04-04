import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  const categoryOrder = [
    "Control Failure",
    "Predictability Failure",
    "Learning Failure",
  ] as const;

  const categoryLabels: Record<string, string> = {
    "Control Failure": "制御不能",
    "Predictability Failure": "予測不能",
    "Learning Failure": "学習不能",
  };

  const categoryDescriptions: Record<string, string> = {
    "Control Failure":
      "ミスの種類が一定しない、意図と結果が一致しない、外れ方が読めない。そんな“制御不能”の状態を整理します。",
    "Predictability Failure":
      "練習では打てるのに本番で崩れる。スコアや結果が安定しない“予測不能”の構造を整理します。",
    "Learning Failure":
      "努力しているのに改善が続かない。伸び悩みの背景にある“学習不能”の構造を整理します。",
  };

  const categories = categoryOrder.filter((category) =>
    posts.some((post) => post.category === category)
  );

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white px-6 py-20 text-center md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 md:text-base">
            BLOG
          </p>

          <h1 className="mx-auto mt-4 max-w-5xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            再現性から考える、
            <br className="hidden sm:block" />
            ゴルフ上達のためのブログ。
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            Hi Golfのブログでは、スイングの表面的な修正ではなく、
            上達が続かない構造そのものを整理していきます。
          </p>

          <p className="mx-auto mt-8 max-w-3xl text-xl font-semibold leading-9 text-slate-900 md:text-2xl">
            目の前のミスを直すのではなく、
            <br className="hidden sm:block" />
            なぜ崩れるのかを構造で捉える。
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/initial-diagnosis"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              初回診断の案内を見る
            </Link>
            <Link
              href="/hgqm"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              HGQMを見る
            </Link>
          </div>
        </div>
      </section>


      {/* Categories */}
      {categories.length > 0 && (
        <section className="bg-slate-50 px-6 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 md:text-base">
                CATEGORY
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                3つのテーマで、
                <br className="hidden sm:block" />
                上達の停滞を整理する。
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
                Hi Golfのブログは、上達が止まる原因を
                「制御不能」「予測不能」「学習不能」の3つに分けて整理しています。
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {categories.map((category) => (
                <div
                  key={category}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {category}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-900">
                    {categoryLabels[category]}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {categoryDescriptions[category]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Posts */}
      <section className="bg-white px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 md:text-base">
              ARTICLES
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              記事一覧
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              気になるテーマから読んでも構いません。
              ただし、本質は個別のミスではなく、結果を不安定にしている構造にあります。
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-slate-200 bg-slate-50 p-10 text-center shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">
                まだ記事が公開されていません
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                今後、再現性・ばらつき・改善設計に関する記事を順次追加していきます。
              </p>
            </div>
          ) : (
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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

                  <div className="mt-5 flex items-center justify-between gap-4">
                    <p className="text-xs text-slate-400">{post.date}</p>
                    <span className="text-sm font-semibold text-slate-700">
                      記事を読む
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white px-8 py-12 text-center shadow-sm md:px-12 md:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 md:text-base">
            NEXT STEP
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            読んで終わりではなく、
            <br className="hidden sm:block" />
            自分の課題を整理する。
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            記事で考え方を理解したら、次は自分の現状を把握する段階です。
            Hi Golfでは、クラブ条件とショット結果を確認しながら、
            何を優先して整えるべきかを整理します。
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/initial-diagnosis"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              初回診断の案内を見る
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              料金を見る
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}