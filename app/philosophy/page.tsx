export default function PhilosophyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-slate-50 px-8 py-20 md:px-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Philosophy
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            ゴルフを
            <br />
            工学的に理解する
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            ゴルフの上達は長い間、感覚や経験に強く依存してきました。
            しかし現在では、弾道計測やショットデータの蓄積によって、
            結果を観測し、傾向を捉え、原因を分析することが可能になっています。
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Hi Golfは、上達を偶然の成功としてではなく、
            再現性の改善として捉えます。
            そのために、観測・評価・原因分析・改善設計という
            工学的なフレームでゴルフを理解します。
          </p>
        </div>
      </section>

      <section className="px-8 py-16 md:px-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold">なぜ感覚論だけでは足りないのか</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold">感覚は共有しにくい</h3>
              <p className="mt-3 leading-7 text-slate-600">
                「こう振る感じ」「このタイミング」といった表現は、
                人によって解釈が異なります。
                感覚だけでは、再現可能な指導体系になりにくいという限界があります。
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold">結果と原因が混同されやすい</h3>
              <p className="mt-3 leading-7 text-slate-600">
                球が曲がったという結果だけを見て、
                すぐにスイングのせいだと決めつけると、
                本来の原因を見誤ることがあります。
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold">一発の成功は再現性を保証しない</h3>
              <p className="mt-3 leading-7 text-slate-600">
                たまたま良いショットが出ても、
                それが安定して再現できなければ競技力にはつながりません。
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold">改善には順序が必要</h3>
              <p className="mt-3 leading-7 text-slate-600">
                問題をすべて同時に直そうとすると、
                何が効いたのか分からなくなります。
                改善には工程と優先順位が必要です。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-8 py-16 md:px-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold">なぜ再現性を中心に置くのか</h2>

          <div className="mt-8 space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">ラウンドで必要なのは再現可能性</h3>
              <p className="mt-3 leading-7 text-slate-600">
                スコアは一球の美しさで決まりません。
                同じ状況で、同じ品質のショットをどれだけ繰り返せるかが重要です。
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">再現性は改善の評価軸になる</h3>
              <p className="mt-3 leading-7 text-slate-600">
                上達したかどうかは、最良値ではなく分布やばらつきで判断するべきです。
                再現性は、改善の進捗を評価するための軸になります。
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">再現性が高まると戦略が組める</h3>
              <p className="mt-3 leading-7 text-slate-600">
                どの球筋が安定して打てるかが分かれば、
                コースマネジメントや狙い方も設計しやすくなります。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 md:px-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold">HGQMが目指すもの</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold">観測できること</h3>
              <p className="mt-3 leading-7 text-slate-600">
                結果を曖昧にせず、弾道やばらつきを観測できる状態にすること。
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold">説明できること</h3>
              <p className="mt-3 leading-7 text-slate-600">
                なぜその球が出るのかを、感覚だけでなく因果関係で説明できること。
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold">設計できること</h3>
              <p className="mt-3 leading-7 text-slate-600">
                何を先に改善すべきかを明確にし、上達の道筋を設計できること。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-8 py-16 md:px-16 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Vision
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            HGQMを、ゴルフの科学体系へ
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            HGQMは単なるレッスン理論ではありません。
            ゴルフを「再現性」「原因分析」「改善設計」という観点から理解する、
            再利用可能な方法論として設計されています。
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            将来的には、学習、指導、競技、クラブ選定、コース戦略まで含めて、
            ゴルフを体系的に扱うための基盤へ発展させることを目指します。
          </p>
        </div>
      </section>
    </main>
  );
}