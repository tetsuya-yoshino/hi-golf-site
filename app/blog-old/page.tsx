export function generateStaticParams() {
  return [{ slug: 'control-failure' }]
}

export default function BlogSlugPage({
  params,
}: {
  params: { slug: string }
}) {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-slate-900">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold">Dynamic Route Test</h1>
        <p className="mt-4 text-lg">slug: {params.slug}</p>
      </div>
    </main>
  )
}