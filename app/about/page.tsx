import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="mx-auto max-w-4xl px-6 py-16 md:px-8 md:py-24">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-emerald-700 uppercase">
            About
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            自己紹介
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            感覚ではなく、計測・分析・設計でゴルフ改善を支援する。
            それが Hi Golf の基本姿勢です。
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-lg font-semibold">代表者プロフィール</h2>
              <dl className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                <div>
                  <dt className="font-semibold text-slate-900">名前</dt>
                  <dd>芳野 鉄也</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">資格</dt>
                  <dd>USGTF Certified Golf Teaching Professional（フロリダ州ウエストパームビーチにて取得）</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">専門</dt>
                  <dd>HGQMによるゴルフ診断・改善設計</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">経歴</dt>
                  <dd>油圧設計技術者として長年、シミュレーション分析と改善設計に従事</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">ベストスコア</dt>
                  <dd>73</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="space-y-10 md:col-span-2">
          <section>
  <h2 className="text-2xl font-bold">なぜ Hi Golf を始めたのか</h2>

  <p className="mt-4 leading-8 text-slate-700">
    多くのゴルフレッスンは、「感覚」や「なんとなく良くなった」という評価に頼りがちです。
    しかしそれでは、ショットの再現性が安定せず、スコア改善も長続きしません。
  </p>

  <p className="mt-4 leading-8 text-slate-700">
    私はエンジニアとして長年、複雑な現象を
    「測定し、原因を特定し、改善策を設計し、結果を確認する」
    という工程で扱ってきました。
    この工程管理の考え方をゴルフに応用することで、
    上達を“感覚”ではなく“プロセス”として扱えると考えました。
  </p>

  <p className="mt-4 leading-8 text-slate-700">
    さらに、アメリカ・フロリダ州で取得したUSGTFの指導体系で学んだ
    飛球理論やD-Planeの理解をベースに、
    ボールの出球方向や曲がりの原因を構造的に整理します。
  </p>

  <p className="mt-4 leading-8 text-slate-700">
     また、レッスンには運動学習理論に基づいたカリキュラムを採用し、
  意識しなくても同じ動きが安定してできる状態を目指して、
  スイングを段階的に定着させていきます。
  </p>

  <p className="mt-4 leading-8 text-slate-700">
    Hi Golfではこれらを統合し、
    「計測 → 改善の方向づけ → 実践 → 確認」
    という流れでスイングを整理し、
    再現性の高いゴルフへと導きます。
  </p>
</section>

            <section>
  <h2 className="text-2xl font-bold">Hi Golf の強み</h2>

  <p className="mt-4 leading-8 text-slate-700">
    一般的なレッスンがフォーム修正に留まりやすいのに対し、
    Hi Golfでは「なぜそのミスが起きるのか」を整理し、
    改善の優先順位と再現性向上のプロセスまで設計します。
  </p>

  <p className="mt-4 leading-8 text-slate-700">
  USGTFで学んだ実践的なゴルフ指導と、
  エンジニアとして培った原因分析・改善設計のアプローチを融合し、
  再現性の向上まで見据えた指導を行っています。
</p>

  <ul className="mt-4 space-y-3 text-slate-700">
    <li>・弾道データと実際のスイング傾向をあわせて診断</li>
    <li>・Observation / Pattern / Cause / Design の流れで整理</li>
    <li>・感覚論ではなく、改善ロードマップを提示</li>
    <li>・一人ひとりの再現性レベルに応じた個別設計</li>
  </ul>
</section>

            <section className="rounded-2xl bg-slate-900 px-6 py-8 text-white">
              <h2 className="text-2xl font-bold">まずは初回診断から</h2>
              <p className="mt-3 leading-8 text-slate-300">
                現状の課題を整理し、改善の方向性を明確にします。
              </p>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:opacity-90"
                >
                  お問い合わせはこちら
                </Link>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}