import Link from "next/link";

export default function ContactPage() {
  const contactTopics = [
    {
      title: "初回診断について相談したい",
      body: "自分に初回診断が合っているか、どのような内容を行うのか、受ける前に確認したい方のための相談窓口です。",
    },
    {
      title: "サービス内容を確認したい",
      body: "レッスンの考え方、進め方、対象レベル、継続プログラムの方向性など、Hi Golf全体に関するご質問を受け付けています。",
    },
    {
      title: "受講前に整理したいことがある",
      body: "現在の課題、目指すゴルフ、受講目的を踏まえて、どこから始めるのが適切かを整理したい方に向いています。",
    },
    {
      title: "その他の問い合わせ",
      body: "取材、提携、法人向けのご相談など、初回診断以外のお問い合わせにも対応します。",
    },
  ];

  const flow = [
    {
      step: "Step 1",
      title: "内容を送る",
      body: "初回診断についての質問、サービス内容の確認、その他のご相談内容をお送りください。",
    },
    {
      step: "Step 2",
      title: "内容を整理する",
      body: "お問い合わせ内容を確認し、必要に応じて初回診断の考え方や適切な進め方を整理します。",
    },
    {
      step: "Step 3",
      title: "次の案内につなぐ",
      body: "初回診断をご希望の場合は、内容確認のうえで、案内ページや申込導線へ進んでいただきます。",
    },
  ];

  const beforeContact = [
    "初回診断の内容を見ておきたい",
    "自分の課題に合うか確認したい",
    "継続レッスンとの違いを知りたい",
    "受ける前に不明点を整理したい",
  ];

  return (
    <main className="bg-white text-slate-900">
      {/* Hero */}
      <section className="bg-slate-50 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 md:text-base">
            Contact
          </p>

          <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            初回診断・サービスに関する
            <br className="hidden sm:block" />
            ご相談
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            Hi Golfへのお問い合わせページです。
            <br className="hidden sm:block" />
            初回診断についてのご質問、サービス内容に関する確認、
            導入前の相談事項などを受け付けています。
          </p>

          <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 text-left shadow-sm">
            <p className="text-base leading-8 text-slate-700 md:text-lg">
              Hi Golfでは、
              <span className="font-semibold text-slate-900">
                いきなり申し込むこと
              </span>
              よりも、
              <span className="font-semibold text-slate-900">
                まず内容を理解し、課題を整理すること
              </span>
              を重視しています。
            </p>
            <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
              このページは、申込前の不明点や確認事項を整理するための窓口です。
              初回診断そのものの説明は、専用ページで確認できるようにしています。
            </p>
          </div>

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

      {/* Contact topics */}
      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Contact Topics
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              このページで受け付けている内容
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              「申し込む」前に整理したいことがある方のために、
              相談内容を分けて受け付けています。
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {contactTopics.map((item) => (
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

      {/* Before inquiry */}
      <section className="bg-slate-50 px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Before Contact
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              こんな方は、
              まず内容確認からで大丈夫です
            </h2>

            <div className="mt-6 space-y-4">
              {beforeContact.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <p className="text-base leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Why This Page Exists
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              いきなり修正する前に、
              <br />
              まず整理する
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              Hi Golfでは、いきなり多くを修正することを勧めていません。
              まず現状を把握し、何が課題で、何を優先して整えるべきかを整理することを重視しています。
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              お問い合わせは、その前段階として不明点を解消するための入口です。
              初回診断を受けるべきか迷っている段階でも問題ありません。
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:info@higolf.jp?subject=Hi%20Golf%E3%81%B8%E3%81%AE%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                メールで相談する
              </a>
              <Link
                href="/initial-diagnosis"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
              >
                初回診断の詳細を見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Flow
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              お問い合わせの流れ
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              相談内容を確認し、必要に応じて初回診断や次の導線をご案内します。
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
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

      {/* CTA */}
      <section className="bg-slate-900 px-6 py-20 text-white md:px-10 md:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Contact Hi Golf
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            何を直すべきか分からないまま、
            <br className="hidden sm:block" />
            練習を続けないために。
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Hi Golfは、感覚的に修正を重ねる前に、
            まず現状を整理することを重視します。
            お問い合わせは、その入口として利用していただけます。
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:info@higolf.jp?subject=Hi%20Golf%E3%81%B8%E3%81%AE%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              メールで問い合わせる
            </a>
            <Link
              href="/initial-diagnosis"
              className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-400 hover:bg-slate-800"
            >
              初回診断の案内を見る
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}