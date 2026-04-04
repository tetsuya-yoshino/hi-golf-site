import Link from "next/link";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf4o3T2VqnQclNEQtEFRGVgusr70bMKuKPKhQ-kub9XX96MYQ/viewform?usp=dialog";

export default function Home() {
  const concerns = [
    "練習しているのに上手くならない・スコアが伸びない",
    "ミスの原因が分からない",
    "レッスン後は良くてもコースで崩れる",
    "何を優先して直すべきか分からない",
  ];

  const methodSteps = [
    {
      title: "計測",
      body: "ショット結果とクラブ条件を確認し、感覚ではなく事実から現状を把握します。",
    },
    {
      title: "把握",
      body: "結果のばらつき方やミスの傾向を整理し、どこで再現性が崩れているかを見ます。",
    },
    {
      title: "分析",
      body: "表面的なミスではなく、その奥にある原因構造を分解して整理します。",
    },
    {
      title: "改善設計",
      body: "何を先に直すべきかを明確にし、無駄な試行錯誤を減らす改善方針を設計します。",
    },
    {
      title: "検証",
      body: "改善後の変化を再度確認し、再現可能な形で定着につなげます。",
    },
  ];

  const outcomes = [
    "何を直すべきかが明確になる",
    "ミスの原因が整理される",
    "改善の優先順位が決まる",
    "今後の練習の方向が見える",
  ];

  const metrics = [
    {
      label: "平均スコア",
      value: "83 → 79",
      note: "一発の好調ではなく、再現性の改善による変化です。",
    },
    {
      label: "FWキープ率",
      value: "58% → 65%",
      note: "外れ方のばらつきが減ることで、マネジメントが機能しやすくなります。",
    },
    {
      label: "ドライバー平均距離",
      value: "234y → 251y",
      note: "安定性の向上は、結果として出力の改善にもつながります。",
    },
    {
      label: "GIR",
      value: "33% → 44%",
      note: "再現性の改善は、次打を楽にし、スコア構造そのものを変えます。",
    },
  ];

  const blogPosts = [
    {
      category: "CONTROL FAILURE",
      title: "なぜミスの種類がバラバラなのか？",
      excerpt:
        "左にも右にもミスが出る。その本質はスイングの形ではなく、インパクト条件が安定していないことにあります。",
      href: "/blog",
      date: "2026-03-25",
    },
    {
      category: "PREDICTABILITY FAILURE",
      title: "練習では打てるのに本番で崩れる理由",
      excerpt:
        "練習と本番が一致しないのは、メンタルの問題だけではありません。再現性が途切れる構造があります。",
      href: "/blog",
      date: "2026-03-25",
    },
    {
      category: "LEARNING FAILURE",
      title: "努力しているのに伸びないのはなぜか",
      excerpt:
        "改善が続かない人は、動きを直そうとしすぎています。本当に必要なのは、原因の特定と順序設計です。",
      href: "/blog",
      date: "2026-03-25",
    },
  ];

  return (
    <main className="bg-white text-slate-900">
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white px-6 py-20 text-center md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold tracking-[0.2em] text-slate-500 uppercase">
  Hi Golf Policy
</p>

<p className="mt-4 text-base md:text-lg font-medium text-slate-700">
  上達を、感覚ではなく再現性で設計する。
</p>

<h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-900 md:text-7xl leading-tight">
  再現性で、<br />
  ゴルフは変わる。
</h1>

<p className="mt-6 text-lg md:text-xl text-slate-600">
  再現性が変われば、スコアも変わる。
</p>

          <div className="mx-auto mt-8 max-w-3xl space-y-4 text-base leading-8 text-slate-600 md:text-lg">
            <p>
              多くのゴルファーは、目の前のミスを直そうとします。
            </p>
            <p>
              しかし、それではあなたのゴルフは変わりません。スコアを左右しているのは、
              一発のナイスショットではなく、
              <span className="font-semibold text-slate-900">
                「同じ結果を、繰り返せるか」
              </span>
              だからです。
            </p>
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-xl font-semibold leading-9 text-slate-900 md:text-2xl">
            問題は、スイングの良し悪しではなく、
            <br className="hidden sm:block" />
            “ばらつきが制御されていないこと”にあります。
          </p>

        </div>
      </section>

      {/* Concerns */}
      <section className="bg-white px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 md:text-base">
              COMMON ISSUES
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              なぜ、思うように上達できないのか？
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              多くのゴルファーは、次のような状態に陥っています。
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {concerns.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm"
              >
                <p className="text-base text-slate-800 md:text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Hi Golf does */}
      <section className="bg-slate-50 px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 md:text-base">
              WHAT HI GOLF DOES
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Hi Golfは、スイングを
              <br className="hidden sm:block" />
              「構造」で改善します。
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              感覚的な修正点を増やすのではなく、
              ばらつきの原因を整理し、改善の順序を設計する。
              それがHi Golfのレッスンです。
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                感覚ではなく、計測から始める
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                良い・悪いではなく、何が起きているかを確認し、
                改善の出発点を明確にします。
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                原因を特定し、優先順位を決める
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                問題を一気に直すのではなく、変化につながる要因から順に整えます。
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                再現できる形まで検証する
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                たまたま良くなったでは終わらせず、コースでも機能する再現性へとつなげます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HGQM */}
      <section className="bg-white px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 md:text-base">
              HGQM
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              改善を、見える形にする。
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              HGQM（Hi Golf Quality Method）は、再現性を高めるための独自メソッドです。
              計測から改善設計までを一つの流れで整理します。
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-5">
            {methodSteps.map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Step
                </p>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/hgqm"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              HGQMの詳細を見る
            </Link>
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="bg-slate-50 px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 md:text-base">
              EVIDENCE
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              再現性が変わると、
              <br className="hidden sm:block" />
              スコア構造も変わる。
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              以下は、HGQM導入前後のラウンドデータを比較した実測値です。
              平均スコアだけでなく、FWキープ率、ドライバー平均距離、GIRの変化からも、
              再現性の改善がスコア構造そのものを変えていることを確認できます。
            </p>

            <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-slate-500">
              ※数値は、HGQM導入前3か月と導入後6か月のラウンド記録を比較したものです。
              平均スコアは各期間のラウンド平均、FWキープ率・GIR・ドライバー平均距離は
              対象期間中の実績平均です。
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
              >
                <p className="text-sm font-medium text-slate-500">{metric.label}</p>
                <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{metric.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Initial Diagnosis */}
      <section className="bg-white px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 md:text-base">
              INITIAL DIAGNOSIS
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              まずは、自分の課題を
              <br className="hidden sm:block" />
              整理するところから。
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              改善を始める前に必要なのは、修正点を増やすことではありません。
              いま何が起きているのかを把握し、何を優先して直すべきかを明確にすることです。
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">
                初回診断で分かること
              </h3>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                {outcomes.map((item) => (
                  <li key={item} className="rounded-xl bg-white px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">
                初回診断の概要
              </h3>

              <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600">
                <div>
                  <p className="font-semibold text-slate-900">所要時間</p>
                  <p>90分</p>
                </div>

                <div>
                  <p className="font-semibold text-slate-900">実施内容</p>
                  <p>
                    クラブ計測（重量・長さ・スイングウェイト）、
                    ドライバーとミドルアイアンのショット計測、
                    現状分析、改善方針の整理
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-slate-900">対象</p>
                  <p>
                    本気で上達したい方、努力しているのに結果が安定しない方、
                    改善の方向を明確にしたい方
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/initial-diagnosis"
                  className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  初回診断の案内を見る
                </Link>
                <Link
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  今すぐ申し込む
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="bg-slate-50 px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 md:text-base">
              BLOG
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              再現性から考える、
              <br className="hidden sm:block" />
              ゴルフ上達のためのブログ。
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              Hi Golfのブログでは、スイングの表面的な話ではなく、
              上達が続かない構造そのものを整理していきます。
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.title}
                href={post.href}
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
    </main>
  );
}