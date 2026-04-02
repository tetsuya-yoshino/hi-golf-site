import Link from "next/link";

const ongoingPrograms = [
  {
    english: "Foundation",
    name: "改善導入",
    price: "¥24,000",
    unit: "/ 月",
    frequency: "月2回",
    duration: "1回90分",
    description:
      "動作の土台を整え、再現可能なスイングの基礎を構築していく導入プログラムです。",
    outcome:
      "ミスの種類が整理され、改善の方向性が明確になります。",
    features: [
      "基本動作の再構築",
      "ミスの原因整理",
      "再現性の基礎づくり",
    ],
    featured: false,
  },
  {
    english: "Control",
    name: "ばらつき制御",
    price: "¥36,000",
    unit: "/ 月",
    frequency: "月2回",
    duration: "1回90分",
    description:
      "ショットのばらつきを観測・整理しながら、スコアが安定して出る状態をつくる継続プログラムです。",
    outcome:
      "ミスの幅が狭まり、大崩れしにくいゴルフへと変わっていきます。",
    features: [
      "ミスパターンの定量管理",
      "分散の制御",
      "再現性の安定化",
    ],
    featured: true,
  },
  {
    english: "Optimization",
    name: "最適化",
    price: "¥50,000",
    unit: "/ 月",
    frequency: "月2回",
    duration: "1回90分",
    description:
      "再現性を土台に、飛距離・方向性・戦略・クラブ適正まで含めて最適化していく上位プログラムです。",
    outcome:
      "安定性だけでなく、スコアを引き上げるための精度設計まで進めます。",
    features: [
      "スコア構造設計",
      "クラブ最適化",
      "競技・実戦対応",
    ],
    featured: false,
  },
];

const faqItems = [
  {
    question: "初回診断だけでも受けられますか？",
    answer: "はい。初回診断のみでも受講可能です。",
  },
  {
    question: "その場で継続申込を決める必要はありますか？",
    answer:
      "ありません。診断結果と改善方針をご確認いただいたうえで、必要に応じてご検討ください。",
  },
  {
    question: "初心者でも受けられますか？",
    answer:
      "受けられます。レベルに応じて、確認する内容と改善方針を調整します。",
  },
  {
    question: "クラブは必要ですか？",
    answer:
      "基本的には、普段お使いのクラブをお持ちいただくのが理想です。",
  },
  {
    question: "スコアが100前後でも対象ですか？",
    answer:
      "もちろんです。Hi Golfは、課題を整理しながら改善を進めたい方のためのレッスンです。",
  },
];

const flowSteps = [
  {
    step: "01",
    title: "初回診断",
    description:
      "現状を観測し、課題を整理し、改善の優先順位を明確にします。",
  },
  {
    step: "02",
    title: "改善フェーズの提案",
    description:
      "診断結果に基づき、必要な改善段階をご案内します。無理な勧誘は行いません。",
  },
  {
    step: "03",
    title: "継続的な観測・修正・検証",
    description:
      "単発の感覚ではなく、再現可能な状態を作るために改善を積み上げます。",
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="bg-slate-50 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 md:text-base">
            Pricing
          </p>

          <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            料金プラン
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            Hi Golfのレッスンは、
            ただ球を打つための時間ではありません。
            <br className="hidden sm:block" />
            課題を観測し、原因を整理し、改善を設計するための時間です。
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            そのため料金も、
            「レッスン時間」ではなく
            「診断と改善設計のプロセス」に基づいて設計しています。
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/initial-diagnosis"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              初回診断の案内を見る
            </Link>
            <Link
              href="#pricing-structure"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-8 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-900 hover:bg-white"
            >
              料金体系を見る
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white px-6 py-20 md:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            まずは、課題を整理するところから。
          </h2>

          <div className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            <p>
              多くのゴルファーは、
              何を直すべきかが曖昧なまま練習を続けています。
            </p>
            <p className="mt-4">
              しかし改善が続くかどうかは、
              「たくさん打つこと」よりも、
              何を優先して直すべきかが整理されているかで決まります。
            </p>
            <p className="mt-4">
              Hi Golfではまず現状を観測し、
              改善の優先順位を明確にすることを重視しています。
            </p>
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="bg-slate-50 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 md:text-base">
              Process
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Hi Golfの料金設計は、
              改善プロセスに対応しています
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {flowSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
              >
                <p className="text-sm font-semibold tracking-[0.2em] text-slate-400">
                  {item.step}
                </p>
                <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Structure */}
      <section
        id="pricing-structure"
        className="bg-white px-6 py-20 md:px-10"
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 md:text-base">
              Pricing Structure
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              料金は、レベル別ではなく
              改善フェーズで設計しています
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              Hi Golfでは、
              初心者・中級者・上級者といった区分で価格を分けていません。
              初回診断で現状を整理し、その上で必要な改善フェーズに応じて、
              最適なプログラムをご案内します。
            </p>
          </div>

          {/* Initial + Single */}
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Initial Diagnosis
              </p>
              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                初回診断
              </h3>

              <div className="mt-5 flex items-end gap-2">
                <p className="text-4xl font-bold text-slate-900">¥15,000</p>
                <p className="pb-1 text-sm text-slate-500">税込</p>
              </div>

              <div className="mt-4 inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                1回90分
              </div>

              <p className="mt-6 text-base leading-7 text-slate-600">
                まずは、自分の課題を整理したい方のための診断プランです。
                現状を観測し、原因を整理し、何を優先して改善すべきかを明確にします。
              </p>

              <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-900">
                  実施内容
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                  <li>・クラブ計測（重さ・長さ・スイングウエイト）</li>
                  <li>・ショット計測（ドライバー／ミドルアイアン）</li>
                  <li>・弾道データ分析</li>
                  <li>・課題の構造化（HGQM）</li>
                  <li>・改善設計の提示</li>
                </ul>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 p-5">
                <p className="text-sm leading-6 text-slate-600">
                  改善の成否は、最初の診断でほぼ決まります。
                  Hi Golfでは、まず「何を直すか」を曖昧にしないことを重視しています。
                </p>
              </div>

              <p className="mt-6 text-sm leading-6 text-slate-500">
                初回診断のみの受講も可能です。
              </p>

              <Link
                href="/initial-diagnosis"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto"
              >
                初回診断の案内を見る
              </Link>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Single Session
              </p>
              <h3 className="mt-3 text-2xl font-bold text-slate-900">
                単発セッション
              </h3>

              <div className="mt-5 flex items-end gap-2">
                <p className="text-4xl font-bold text-slate-900">¥18,000</p>
                <p className="pb-1 text-sm text-slate-500">税込 / 回</p>
              </div>

              <div className="mt-4 inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                1回90分
              </div>

              <p className="mt-6 text-base leading-7 text-slate-600">
                すでに課題が明確な方が、
                確認や微調整を行いたい場合のためのセッションです。
                継続プログラムの代替ではなく、
                限定的な用途に向いたプランです。
              </p>

              <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-900">
                  向いているケース
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                  <li>・課題がすでに明確である</li>
                  <li>・定期的な継続ではなく、確認や調整が目的である</li>
                  <li>・設計済みの改善内容を点検したい</li>
                </ul>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 p-5">
                <p className="text-sm leading-6 text-slate-600">
                  単発でも対応は可能ですが、
                  再現性の改善は本来、
                  観測 → 修正 → 検証を継続することで成立します。
                </p>
              </div>

              <p className="mt-6 text-sm leading-6 text-slate-500">
                課題が明確な方におすすめです。
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-900 hover:bg-slate-50 sm:w-auto"
              >
                お問い合わせはこちら
              </Link>
            </div>
          </div>

          {/* Ongoing Programs */}
          <div className="mt-10 rounded-3xl bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Ongoing Programs
            </p>
            <h3 className="mt-3 text-2xl font-bold text-slate-900">
              継続プログラム
            </h3>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
              再現性の改善は、単発では成立しません。
              観測 → 修正 → 検証を繰り返すことで、
              初めて「安定して再現できる状態」が作られます。
            </p>

            <div className="mt-8 rounded-2xl bg-slate-900 p-6 text-white">
              <p className="text-lg font-semibold">
                継続プログラムは、すべて1回90分で設計しています。
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                理由は、単に打つだけでなく、
                観測・修正・検証までを1回の中で行うためです。
                Hi Golfでは、その場の感覚ではなく、
                再現可能な改善プロセスを重視しています。
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {ongoingPrograms.map((program) => (
                <div
                  key={program.name}
                  className={`rounded-2xl border p-6 md:p-7 ${
                    program.featured
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-200 bg-white text-slate-900"
                  }`}
                >
                  <p
                    className={`text-sm font-semibold uppercase tracking-[0.16em] ${
                      program.featured ? "text-slate-300" : "text-slate-500"
                    }`}
                  >
                    {program.english}
                  </p>

                  <h4 className="mt-2 text-xl font-bold">{program.name}</h4>

                  <div className="mt-4 flex items-end gap-2">
                    <p className="text-3xl font-bold tracking-tight">
                      {program.price}
                    </p>
                    <p
                      className={`pb-1 text-sm ${
                        program.featured ? "text-slate-300" : "text-slate-500"
                      }`}
                    >
                      {program.unit}
                    </p>
                  </div>

                  <div
                    className={`mt-2 space-y-1 text-sm ${
                      program.featured ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    <p>{program.frequency}</p>
                    <p>{program.duration}</p>
                  </div>

                  <p
                    className={`mt-5 text-sm leading-6 ${
                      program.featured ? "text-slate-200" : "text-slate-600"
                    }`}
                  >
                    {program.description}
                  </p>

                  <div
                    className={`mt-5 rounded-xl p-4 ${
                      program.featured ? "bg-slate-800" : "bg-slate-50"
                    }`}
                  >
                    <p
                      className={`text-sm leading-6 ${
                        program.featured ? "text-slate-100" : "text-slate-700"
                      }`}
                    >
                      {program.outcome}
                    </p>
                  </div>

                  <ul className="mt-5 space-y-2">
                    {program.features.map((feature) => (
                      <li
                        key={feature}
                        className={`text-sm leading-6 ${
                          program.featured
                            ? "text-slate-100"
                            : "text-slate-700"
                        }`}
                      >
                        ・{feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-white p-5 ring-1 ring-slate-200">
              <p className="text-sm leading-7 text-slate-600">
                継続プログラムは、
                初回診断の結果に基づいてご案内します。
                その場で申込を決める必要はありません。
                診断結果と改善方針をご確認いただいたうえで、
                必要に応じてご検討ください。
              </p>
            </div>
          </div>

          {/* Notes */}
          <div className="mx-auto mt-10 max-w-4xl rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm leading-7 text-slate-600">
              ※ 表示価格はすべて税込です。<br />
              ※ 初回診断・単発セッション・継続プログラムはいずれも1回90分です。<br />
              ※ 継続プログラムは、初回診断の結果に基づいてご案内します。<br />
              ※ プログラム内容は今後調整する場合があります。
            </p>
          </div>
        </div>
      </section>

      {/* Selection Guide */}
      <section className="bg-white px-6 py-20 md:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 md:text-base">
              Selection Guide
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              どのプランを選べばよいですか？
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-slate-50 p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-xl font-semibold">
                まずは課題を整理したい方
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                多くの方は、自分の課題を正しく把握できていません。
                最初に診断を行うことで、改善の方向性が明確になります。
              </p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-xl font-semibold">
                課題を単発で確認したい方
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                すでに課題が明確で、
                必要なタイミングで確認や調整を行いたい方は
                単発セッションが向いています。
              </p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-xl font-semibold">
                本気で改善を定着させたい方
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                診断結果をもとに、
                継続プログラムで観測・修正・検証を繰り返すことが、
                最も効果的な改善ルートです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 md:text-base">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              よくある質問
            </h2>
          </div>

          <div className="mt-12 space-y-6">
            {faqItems.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-lg font-semibold">{item.question}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 px-6 py-20 text-white md:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400 md:text-base">
            Initial Diagnosis
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            まずは、自分の課題を整理するところから。
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            感覚ではなく、現状を観測し、
            改善の優先順位を明確にしたい方へ。
          </p>
          <Link
            href="/initial-diagnosis"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            初回診断の内容を見る
          </Link>
        </div>
      </section>
    </main>
  );
}