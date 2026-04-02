import Link from "next/link";

export default function MethodPage() {
  const flow = [
    {
      step: "Step 1",
      title: "観測",
      body: "打ち出し角、スピン量、方向、距離、高さ、ばらつき、ミス傾向を確認し、何が起きているかを整理します。",
    },
    {
      step: "Step 2",
      title: "評価",
      body: "一発の良いショットではなく、同じ結果をどれだけ安定して再現できるかを見ます。Hi Golfでは“再現性”を評価の中心に置きます。",
    },
    {
      step: "Step 3",
      title: "分析",
      body: "スイングだけに原因を限定せず、クラブ条件、アドレス、狙い方、マネジメントまで含めて要因を切り分けます。",
    },
    {
      step: "Step 4",
      title: "設計",
      body: "何を先に整えるべきかを決め、改善テーマの順序を設計します。やみくもに修正点を増やすことはしません。",
    },
  ];

  const targets = [
    {
      title: "Shot Data",
      body: "打ち出し、スピン、距離、高さ、方向、曲がり幅など、結果として現れる出力を確認します。",
    },
    {
      title: "Pattern",
      body: "どの方向に崩れやすいか、どの距離帯が不安定か、ミスがどう分布しているかを見ます。",
    },
    {
      title: "Cause",
      body: "スイング、クラブ、構え、ボール位置、狙い方、戦略のどこに主要因があるかを整理します。",
    },
  ];

  const principles = [
    {
      title: "一発の成功ではなく、再現性を見る",
      body: "Hi Golfが重視するのは、たまたま打てた一球ではありません。条件が変わっても崩れにくい構造ができているかを見ます。",
    },
    {
      title: "原因を分離して扱う",
      body: "曲がった結果だけを見て、すぐにスイング修正に入ることはしません。何が結果を変えているのかを分解して扱います。",
    },
    {
      title: "改善順序を設計する",
      body: "修正点を増やすほど、動きは不安定になりやすくなります。だからこそ、優先順位を決めて一つずつ整えます。",
    },
  ];

  return (
    <main className="bg-white text-slate-900">
      {/* Hero */}
      <section className="bg-slate-50 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 md:text-base">
            Method
          </p>

          <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            観測し、
            <br className="hidden sm:block" />
            評価し、
            <br className="hidden sm:block" />
            改善を設計する。
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            Hi Golfでは、ショット結果を感覚だけで判断しません。
            <br className="hidden sm:block" />
            弾道データ、ばらつき、ミス傾向、クラブ条件、狙い方を観測し、
            そこから再現性を評価し、原因を分析し、改善の順序を設計します。
          </p>

          <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 text-left shadow-sm">
            <p className="text-base leading-8 text-slate-700 md:text-lg">
              多くのゴルファーは、
              <span className="font-semibold text-slate-900">
                「悪い動きをその場で直そうとする」
              </span>
              ことで迷い続けます。
              <br />
              しかし、スコアを左右しているのは一発のナイスショットではなく、
              <span className="font-semibold text-slate-900">
                「同じ結果を、どれだけ繰り返せるか」
              </span>
              です。
            </p>
            <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
              つまり問題は、スイングの良し悪しだけではありません。
              本質は、
              <span className="font-semibold text-slate-900">
                “ばらつきが制御されていないこと”
              </span>
              にあります。
            </p>
          </div>
        </div>
      </section>

      {/* Core message */}
      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                What Hi Golf Solves
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight">
                上達しない原因を、
                <br />
                “構造”として整理する
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-600">
                練習量が足りないから伸びないのではありません。
                多くの場合、問題は「何を直すべきか」が整理されていないことにあります。
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Hi Golfでは、現象を観測し、結果のばらつきを見て、
                原因を切り分け、改善テーマの順序を設計します。
                そのため、修正が感覚論で終わりません。
              </p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Method Summary
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight">
                計測 → 評価 → 分析 → 設計
              </h2>

              <div className="mt-6 space-y-4">
                {[
                  "感覚ではなく、まず現象を観測する",
                  "一発の成功ではなく、再現性で評価する",
                  "スイング以外の要因も含めて分析する",
                  "修正点を増やさず、改善順序を設計する",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <p className="text-base leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="bg-slate-50 px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Flow
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              HGQMの診断フロー
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Hi Golfでは、現象を順番に整理します。
              いきなり修正に入るのではなく、まずは何が起きているかを明確にします。
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {flow.map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {item.step}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Targets */}
      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              What We Observe
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              HGQMが観る対象
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              見ているのは、スイングの見た目だけではありません。
              出力、ばらつき、傾向、原因まで含めて評価します。
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {targets.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-2xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-slate-50 px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Principles
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Hi Golfの指導思想
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              上達を妨げるのは、努力不足よりも、整理されていない修正です。
              だからHi Golfでは、方法そのものに順序と構造を持たせています。
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {principles.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-2xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Initial Diagnosis
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            まずは、
            自分の課題を整理するところから。
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            今の課題を感覚で判断するのではなく、
            何が起きていて、何を優先して整えるべきかを明確にします。
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/initial-diagnosis"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              初回診断の案内を見る
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
            >
              料金ページを見る
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}