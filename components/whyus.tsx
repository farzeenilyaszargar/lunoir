
export default function WhyUs(){
  const items = [
    { title: 'Feels premium', text: '240 GSM combed cotton. Soft-touch. Holds shape.'},
    { title: 'Perfect fit', text: 'Tailored for Indian sizes XS–XXL. True to size.'},
    { title: 'Built to last', text: 'Pre‑shrunk, anti‑fade dyes, double‑stitched.'},
    { title: 'Fair price', text: 'Factory‑to‑you pricing, no middlemen.'},
  ]
  return (
    <section id="why" className="bg-white border-y border-zinc-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold">Why Teemax?</h2>
          <p className="mt-3 text-zinc-600">We obsessed over fabric, fit and finish so you don’t have to. The result? Tees you’ll reach for every day.</p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {items.map((x)=> (
              <div key={x.title} className="rounded-2xl border border-zinc-200 p-4">
                <h3 className="font-semibold">{x.title}</h3>
                <p className="mt-1 text-sm text-zinc-600">{x.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl bg-zinc-100 aspect-[4/3] grid place-items-center">
          <div className="rounded-2xl bg-white/70 px-4 py-2 text-xs">Lifestyle image placeholder</div>
        </div>
      </div>
    </section>
  )
}