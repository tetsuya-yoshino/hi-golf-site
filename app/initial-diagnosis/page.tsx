import Link from "next/link";

const diagnosisSteps = [
  {
    step: "01",
    title: "現状の確認",
    description:
      "まずは現在の悩み、ミスの傾向、目指したいゴルフの方向性を整理します。感覚的な悩みを、そのままにせず言語化するところから始めます。",
  },
  {
    step: "02",
    title: "クラブ計測",
    description:
      "普段お使いのクラブを計測し、重さ・長さ・スイングウエイトを確認します。ショット結果を見る前にクラブ条件を把握することで、動きの問題と道具の影響を切り分けやすくします。",
  },
  {
    step: "03",
    title: "ショット計測",
    description:
      "ドライバーとミドルアイアンを中心にショットを計測し、打ち出し・方向・ばらつき・傾向を確認します。単発の良し悪しではなく、繰り返したときにどのような傾向が出るかを見ます。",
  },
  {
    step: "04",
    title: "課題の構造化",
    description:
      "計測結果をもとに、課題をHGQMの考え方で整理します。表面的なミスではなく、何が優先課題なのか、どこから改善を始めるべきかを明確にします。",
  },
  {
    step: "05",
    title: "改善設計の提示",
    description:
      "診断の最後に、改善の方向性をお伝えします。何を直すべきか、どの順番で取り組むべきか、継続が必要かどうかも含めて整理します。",
  },
];

const deliverables = [
  "いま抱えている課題が整理される",
  "ミスの原因が感覚ではなく構造で見えてくる",
  "何を優先して直すべきかが明確になる",
  "今後の練習方針がはっきりする",
  "必要に応じて継続プログラムの方向性が分かる",
];

const faqItems = [
  {
    question: "初回診断だけでも受けられますか？",
    answer:
      "はい。初回診断のみでも受講可能です。まずは現状を整理したい方にも対応しています。",
  },
  {
    question: "その場で継続申込を決める必要はありますか？",
    answer:
      "ありません。診断結果と改善方針をご確認いただいたうえで、必要に応じてご検討ください。",
  },
  {
    question: "初心者でも受けられますか？",
    answer:
      "受けられます。レベルに応じて、確認する内容や改善方針を調整します。",
  },
  {
    question: "クラブは持参した方がよいですか？",
    answer:
      "はい。普段お使いのクラブをお持ちいただくのが理想です。現在の条件を前提に診断することで、実際の課題が把握しやすくなります。",
  },
];

const summaryItems = [
  {
    label: "Price",
    value: "¥15,000",
    note: "税込",
  },
  {
    label: "Duration",
    value: "90分",
    note: "観測・整理・設計までを1回で実施",
  },
  {
    label: "Purpose",
    value: "課題整理",
    note: "何を直すべきかを曖昧にしない",
  },
];

export default function InitialDiagnosisPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="bg-slate-50 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 md:text-base">
            Initial Diagnosis
          </p>

          <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            初回診断
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            Hi Golfの初回診断は、
            単に球を打って終わるレッスンではありません。
            <br className="hidden sm:block" />
            現状を観測し、傾向を整理し、改善の優先順位を明確にするための時間です。
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            改善の成否は、
            最初に課題を正しく整理できるかで大きく変わります。
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              お問い合わせはこちら
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-8 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-900 hover:bg-white"
            >
              料金プランを見る
            </Link>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="bg-white px-6 py-20 md:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-3">
            {summaryItems.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl bg-slate-50 p-6 shadow-sm ring-1 ring-slate-200"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {item.label}
                </p>
                <p className="mt-3 text-3xl font-bold text-slate-900">
                  {item.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why diagnosis */}
      <section className="bg-white px-6 py-20 md:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 md:text-base">
            Why Diagnosis
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            なぜ、最初に診断が必要なのか
          </h2>

          <div className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            <p>
              多くのゴルファーは、
              何を直すべきかが曖昧なまま練習を続けています。
            </p>
            <p className="mt-4">
              その結果、修正点が増え、かえって迷いが増えたり、
              練習では良くてもコースで再現できなかったりします。
            </p>
            <p className="mt-4">
              Hi Golfでは、まず現状を観測し、課題を整理し、
              改善の優先順位を明確にすることを最初のステップにしています。
            </p>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-slate-50 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 md:text-base">
              What We Do
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              初回診断で行うこと
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              初回診断は、観測して終わりではありません。
              現状を確認し、原因を整理し、今後の改善方針まで設計します。
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {diagnosisSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Step {item.step}
                </p>
                <h3 className="mt-3 text-2xl font-bold">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why club measurement first */}
      <section className="bg-white px-6 py-20 md:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 md:text-base">
              Why Club Measurement First
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              なぜ、ショット計測の前に
              クラブ計測を行うのか
            </h2>

            <div className="mt-6 space-y-4 text-lg leading-8 text-slate-600">
              <p>
                ショット結果は、
                スイングだけで決まるわけではありません。
                クラブの重さ、長さ、スイングウエイトといった条件も、
                動きや打球結果に影響します。
              </p>
              <p>
                そのためHi Golfでは、先にクラブ条件を確認し、
                「動きの問題」と「道具の影響」を切り分けた上でショットを見ます。
              </p>
              <p>
                これにより、感覚的な修正ではなく、
                より再現性の高い改善設計が可能になります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-slate-50 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 md:text-base">
              Deliverables
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              診断後に分かること
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {deliverables.map((item) => (
              <div
                key={item}
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
              >
                <p className="leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* After diagnosis */}
      <section className="bg-white px-6 py-20 md:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 md:text-base">
            After Diagnosis
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            診断の後について
          </h2>

          <div className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            <p>
              初回診断の目的は、
              その場で申込を迫ることではありません。
            </p>
            <p className="mt-4">
              まずは診断結果と改善方針をご確認いただき、
              必要に応じて継続プログラムをご検討ください。
            </p>
            <p className="mt-4">
              もちろん、初回診断のみの受講でも問題ありません。
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-3xl bg-slate-900 p-8 text-white">
            <p className="text-xl font-semibold">
              改善の成否は、最初の診断でほぼ決まります。
            </p>
            <p className="mt-4 leading-7 text-slate-300">
              何を直すかが曖昧なままでは、
              練習量を増やしても改善は安定しません。
              まずは現状を整理し、優先順位を明確にすることが出発点です。
            </p>
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
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            まずは、自分の課題を整理するところから。
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            感覚ではなく、現状を観測し、
            改善の優先順位を明確にしたい方へ。
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              お問い合わせはこちら
            </Link>

            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-full border border-slate-500 px-8 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-slate-800"
            >
              料金プランを見る
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}