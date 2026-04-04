import Link from "next/link";

export default function HGQMPage() {
  const principles = [
    {
      title: "再現性を基準に考える",
      body: "一発のナイスショットではなく、同じ結果を繰り返せるかを評価の基準にします。Hi Golfでは、上達を“偶然の成功”ではなく“再現可能な状態”として捉えます。",
    },
    {
      title: "ばらつきを制御対象とする",
      body: "ミスを単発で修正するのではなく、結果の散り方そのものを観察します。何が不安定なのかを見極めることで、改善の対象が明確になります。",
    },
    {
      title: "改善の順序を設計する",
      body: "課題を同時に直そうとすると、動きはかえって壊れます。Hi Golfでは、変化につながる要因から優先順位をつけて整理します。",
    },
  ];

  const flow = [
    {
      step: "01",
      title: "計測",
      body: "ショット結果とクラブ条件を確認し、感覚ではなく事実から現状を把握します。",
    },
    {
      step: "02",
      title: "把握",
      body: "ミスの傾向、結果の散り方、安定性の欠けているポイントを整理します。",
    },
    {
      step: "03",
      title: "分析",
      body: "表面的なミスではなく、その奥にある原因構造を分解し、何が結果を不安定にしているかを明らかにします。",
    },
    {
      step: "04",
      title: "改善設計",
      body: "何を先に直すべきかを定め、練習とレッスンの方向性を設計します。",
    },
    {
      step: "05",
      title: "検証",
      body: "改善後の変化を再び確認し、たまたまではなく再現可能な状態へつなげます。",
    },
  ];

  const outcomes = [
    "何を直すべきかが明確になる",
    "ミスの原因を感覚ではなく構造で捉えられる",
    "改善の優先順位が整理される",
    "練習の方向が具体化する",
    "コースで崩れにくい再現性づくりにつながる",
  ];

  const comparisons = [
    {
      before: "悪い動きをその場で直そうとする",
      after: "結果を観察し、原因構造を特定する",
    },
    {
      before: "修正点が増え続ける",
      after: "優先順位をつけて改善する",
    },
    {
      before: "一発の成功を追いかける",
      after: "平均値と安定性を改善する",
    },
    {
      before: "練習では打てるが本番で崩れる",
      after: "コースでも再現できる状態を目指す",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white px-6 py-20 text-center md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 md:text-base">
            HGQM
          </p>

          <h1 className="mx-auto mt-4 max-w-5xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            改善を、
            <br className="hidden sm:block" />
            見える形にする。
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            HGQM（Hi Golf Quality Method）は、
            再現性を高めるための独自メソッドです。
            ショットの良し悪しを感覚で判断するのではなく、
            計測・把握・分析・改善設計・検証の流れで整理します。
          </p>

          <p className="mx-auto mt-8 max-w-3xl text-xl font-semibold leading-9 text-slate-900 md:text-2xl">
            問題をその場で直すのではなく、
            <br className="hidden sm:block" />
            上達の構造そのものを整える。
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/initial-diagnosis"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              初回診断の案内を見る
            </Link>
           
          </div>
        </div>
      </section>

      {/* What is HGQM */}
      <section className="bg-white px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 md:text-base">
              WHAT IS HGQM
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              HGQMは、
              <br className="hidden sm:block" />
              再現性から上達を考える方法論です。
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              ゴルフの上達が続かない理由は、努力が足りないからではありません。
              多くの場合、何を直すべきかが整理されないまま、
              その場のミスを個別に追いかけていることにあります。
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              HGQMでは、ショット結果のばらつきと原因構造を整理し、
              改善の順序を設計することで、
              再現可能な技術へと変えていきます。
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {principles.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="bg-slate-50 px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 md:text-base">
              METHOD FLOW
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              計測から検証までを、
              <br className="hidden sm:block" />
              一つの流れでつなぐ。
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              HGQMは、単なる分析でも、単なるレッスンでもありません。
              現状を確認し、原因を整理し、改善を設計し、変化を検証する。
              その一連の流れを持つことが、上達の再現性につながります。
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {flow.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Step {item.step}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare */}
      <section className="bg-white px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 md:text-base">
              DIFFERENCE
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              HGQMが変えるのは、
              <br className="hidden sm:block" />
              “直し方”そのものです。
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              従来の改善は、目の前のミスをその都度修正する発想に寄りがちです。
              しかしそれでは、修正点が増え、上達の軸がぶれやすくなります。
              HGQMは、改善の対象を“動き”ではなく“構造”として整理します。
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-1 divide-y divide-slate-200 md:grid-cols-2 md:divide-x md:divide-y-0">
              <div className="bg-slate-50 px-6 py-5 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Before
                </p>
                <p className="mt-2 text-lg font-semibold text-slate-900">
                  その場のミスを直す発想
                </p>
              </div>
              <div className="bg-slate-50 px-6 py-5 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  After
                </p>
                <p className="mt-2 text-lg font-semibold text-slate-900">
                  構造を整える発想
                </p>
              </div>
            </div>

            <div className="divide-y divide-slate-200">
              {comparisons.map((item) => (
                <div
                  key={item.before}
                  className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-slate-200"
                >
                  <div className="px-6 py-5 text-sm leading-7 text-slate-600">
                    {item.before}
                  </div>
                  <div className="px-6 py-5 text-sm leading-7 text-slate-600">
                    {item.after}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-slate-50 px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 md:text-base">
                WHAT YOU GET
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                HGQMで得られるのは、
                <br className="hidden sm:block" />
                “迷わない改善”です。
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                ただ「ここを直しましょう」と言われるだけでは、
                本番で崩れたときに再現できません。
                HGQMでは、なぜその改善が必要なのか、
                何を優先すべきなのかまで整理します。
              </p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                その結果、練習の迷いが減り、
                レッスン後の変化がコースでもつながりやすくなります。
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">
                改善の中で明確になること
              </h3>
              <ul className="mt-6 space-y-3">
                {outcomes.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-600"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-slate-50 px-8 py-12 text-center shadow-sm md:px-12 md:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 md:text-base">
            NEXT STEP
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            まずは、
            <br className="hidden sm:block" />
            自分の課題を整理するところから。
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            HGQMは、考え方だけを示すものではありません。
            実際のショットとクラブ条件を確認し、
            現状・原因・優先順位を整理するところから始まります。
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/initial-diagnosis"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              初回診断の案内を見る
            </Link>
          
          </div>
        </div>
      </section>
    </main>
  );
}