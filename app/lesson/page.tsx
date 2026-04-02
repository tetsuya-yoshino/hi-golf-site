export default function LessonPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-slate-50 px-8 py-20 md:px-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Lesson
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            理論を、
            <br />
            上達プロセスに変える
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Hi Golfのレッスンは、単なるフォーム修正ではありません。
            スイングを測定し、課題を整理し、改善の方向を決め、
            コースでも再現できる動きとして定着させていくプロセスです。
            開発設計で用いられる工程管理の考え方を土台に、
              USGTFで学んだ飛球理論、D-Planeの理解、
              そして運動学習理論に基づくカリキュラムを組み合わせています。
          </p>
        </div>
     
      </section>

      <section className="px-8 py-16 md:px-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold">レッスンの基本フロー</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Phase 1
              </p>
              <h3 className="mt-3 text-2xl font-semibold">初回診断</h3>
              <p className="mt-4 leading-7 text-slate-600">
                弾道データ、方向性、距離、ばらつき、ミス傾向を確認し、
                現在のショット品質を把握します。
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Phase 2
              </p>
              <h3 className="mt-3 text-2xl font-semibold">改善テーマ設定</h3>
              <p className="mt-4 leading-7 text-slate-600">
                問題をすべて同時に直すのではなく、
                効果の大きい改善テーマから優先順位を決めます。
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Phase 3
              </p>
              <h3 className="mt-3 text-2xl font-semibold">継続レッスン</h3>
              <p className="mt-4 leading-7 text-slate-600">
                再現性を高めるために、観測と改善を繰り返しながら、
                ショット品質の安定化を目指します。
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Phase 4
              </p>
              <h3 className="mt-3 text-2xl font-semibold">ラウンドへの接続</h3>
              <p className="mt-4 leading-7 text-slate-600">
                練習場のショットだけでなく、コースで再現できるかを重視し、
                戦略や狙い方まで含めて上達につなげます。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-8 py-16 md:px-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold">対象者別アプローチ</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">初心者</h3>
              <p className="mt-3 leading-7 text-slate-600">
                感覚論に頼らず、アドレス・基本動作・ボールコンタクトを
                順序立てて習得したい方に向いています。
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">中級者</h3>
              <p className="mt-3 leading-7 text-slate-600">
                ミスの原因が曖昧で伸び悩んでいる方に対し、
                傾向と原因を整理しながら改善テーマを明確にします。
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">競技志向者</h3>
              <p className="mt-3 leading-7 text-slate-600">
                再現性、距離管理、球筋管理、コース戦略まで含めて、
                スコアに直結する品質向上を目指します。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 md:px-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold">Hi Golfのレッスンが目指すもの</h2>

          <div className="mt-8 space-y-6">
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold">ショットを説明できる状態にする</h3>
              <p className="mt-3 leading-7 text-slate-600">
                良かった・悪かったで終わらせず、
                なぜその結果になったかを説明できる状態を目指します。
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold">改善を再現できる状態にする</h3>
              <p className="mt-3 leading-7 text-slate-600">
                レッスン中だけ良くなるのではなく、
                次回やラウンドでも再現できる改善を目指します。
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold">上達を設計できる状態にする</h3>
              <p className="mt-3 leading-7 text-slate-600">
                何を優先して取り組むべきかが明確になり、
                学習と練習の方向性が整理された状態を目指します。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-8 py-16 md:px-16 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Application of HGQM
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            レッスンは、理論の実験場である
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Hi Golfのレッスンは、HGQMを説明する場ではなく、
            実際に適用し、観測し、改善を積み上げる場です。
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            理論と現場を切り離さず、上達を現実のショット品質として
            確認できることを重視します。
          </p>
        </div>
      </section>
    </main>
  );
}