'use client'

export default function TshirtLanding() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      {/* SEO-ish head content if used in Next.js <Head> */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/90 border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white font-bold tracking-tight">T</span>
              <span className="text-lg font-semibold">Teemax</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#best" className="hover:text-black">Best Sellers</a>
              <a href="#why" className="hover:text-black">Why Us</a>
              <a href="#reviews" className="hover:text-black">Reviews</a>
              <a href="#faq" className="hover:text-black">FAQ</a>
            </nav>
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline text-xs rounded-full bg-zinc-100 px-3 py-1">Free returns • 30‑day trial</span>
              <a href="#grid" className="rounded-xl bg-black px-4 py-2 text-white text-sm font-medium hover:bg-zinc-800 active:scale-[.99]">Shop now</a>
            </div>
          </div>
        </div>
        <USPStrip />
      </header>

      <main>
        <Hero />
        <TrustBar />
        <ProductGrid />
        <WhyUs />
        <SocialProof />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

function USPStrip() {
  return (
    <div className="border-t border-zinc-200 bg-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3 py-2 text-xs text-zinc-700">
          <span className="inline-flex items-center gap-2"><Shield /> 30‑day money‑back</span>
          <span className="hidden sm:inline">•</span>
          <span className="inline-flex items-center gap-2"><Truck /> Free shipping ₹999+</span>
          <span className="hidden sm:inline">•</span>
          <span className="inline-flex items-center gap-2"><Leaf /> 240 GSM, 100% cotton</span>
          <span className="hidden sm:inline">•</span>
          <span className="inline-flex items-center gap-2"><Spark /> Pre‑shrunk, no fade</span>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 py-12 lg:py-20 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-black text-white px-3 py-1 text-xs font-medium">New drop <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse"/></span>
          <h1 className="mt-4 text-4xl/tight sm:text-5xl/tight font-extrabold">Premium tees that <span className="underline decoration-4 underline-offset-4 decoration-yellow-300">sell themselves</span>.</h1>
          <p className="mt-4 text-zinc-600">Ultra-soft, heavy-weight, perfect fit. Designed for all‑day comfort and made to last 100+ washes. Loved by 50,000+ customers.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#grid" className="rounded-xl bg-black px-5 py-3 text-white text-sm font-medium hover:bg-zinc-800">Shop best sellers</a>
            <a href="#reviews" className="rounded-xl border border-zinc-300 px-5 py-3 text-sm font-medium hover:border-zinc-400">Read reviews</a>
          </div>
          <div className="mt-6 flex items-center gap-3 text-sm text-zinc-600">
            <Stars rating={5} /> <span>4.9/5 average • 12k+ reviews</span>
          </div>
        </div>
        <div className="relative aspect-[4/3] rounded-3xl bg-gradient-to-br from-zinc-200 to-zinc-100 shadow-sm overflow-hidden">
          {/* Replace with generated hero image */}
          <div className="absolute inset-0 grid place-items-center">
            <div className="rounded-2xl bg-white/70 px-4 py-2 text-xs">Hero image placeholder</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustBar() {
  return (
    <section className="bg-white border-y border-zinc-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 items-center">
        {['Vogue','GQ','Hypebeast','Esquire','MensXP','Cosmopolitan'].map((b)=> (
          <div key={b} className="h-8 opacity-60 grayscale hover:opacity-100 transition-opacity text-sm flex items-center">{b}</div>
        ))}
      </div>
    </section>
  )
}

function ProductGrid() {
  const products = [
    { id: 1, name: 'Classic Heavy Tee', price: 799, color: 'Jet Black', badge: 'Best Seller' },
    { id: 2, name: 'Oversized Street Tee', price: 899, color: 'Bone', badge: 'Limited' },
    { id: 3, name: 'Everyday Crew Tee', price: 699, color: 'White', badge: 'New' },
    { id: 4, name: 'Athleisure Dry Tee', price: 849, color: 'Charcoal', badge: 'Hot' },
    { id: 5, name: 'Graphic Tee – Mono', price: 999, color: 'Black/White', badge: 'Drop' },
    { id: 6, name: 'Pocket Tee', price: 749, color: 'Navy', badge: 'Restock' },
  ]
  return (
    <section id="grid" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-bold">Best sellers</h2>
        <div className="text-sm text-zinc-600">Free shipping on ₹999+ • COD available</div>
      </div>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((p)=> (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  )
}

function ProductCard({name, price, color, badge}:{name:string; price:number; color:string; badge:string}){
  return (
    <a href="#" className="group rounded-2xl bg-white border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-square overflow-hidden">
        {/* Replace with generated product image */}
        <div className="absolute inset-0 grid place-items-center bg-zinc-100">
          <div className="rounded bg-white/80 px-2 py-1 text-[10px]">Product image</div>
        </div>
        <span className="absolute left-2 top-2 rounded-full bg-black px-2 py-1 text-[10px] font-medium text-white">{badge}</span>
        <button className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-lg bg-white/90 px-3 py-1.5 text-xs shadow opacity-0 group-hover:opacity-100 transition-opacity">Quick view</button>
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium line-clamp-1">{name}</h3>
          <span className="text-sm font-semibold">₹{price}</span>
        </div>
        <p className="mt-1 text-xs text-zinc-500">{color}</p>
        <div className="mt-2 flex items-center gap-1 text-[10px] text-zinc-600"><Stars rating={5}/> <span>1.2k</span></div>
        <button className="mt-3 w-full rounded-xl bg-black py-2 text-white text-sm font-medium hover:bg-zinc-800 active:scale-[.99]">Add to cart</button>
      </div>
    </a>
  )
}

function WhyUs(){
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

function SocialProof(){
  return (
    <section id="reviews" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold">Real reviews from real customers</h2>
      <p className="mt-1 text-sm text-zinc-600">12,000+ 5‑star reviews and counting.</p>
      <div className="mt-6">
        <InfiniteReviews
          reviews={[
            { text: 'Premium quality, legit the best fit I own.', author: 'Aditi', rating: 5 },
            { text: 'Washed 20+ times, still like new.', author: 'Karan', rating: 5 },
            { text: 'Shipping was fast, packaging on point.', author: 'Meera', rating: 5 },
            { text: 'Soft, heavy and drapes perfectly.', author: 'Arjun', rating: 5 },
          ]}
        />
      </div>
    </section>
  )
}

function FAQ(){
  const faqs = [
    { q: 'What’s the fabric & weight?', a: '100% combed cotton, 240 GSM (heavy). Breathable yet structured.'},
    { q: 'How do sizes run?', a: 'True to size. For an oversized look, go one size up.'},
    { q: 'Wash & care?', a: 'Cold wash, inside out. Do not tumble dry. Iron on reverse.'},
    { q: 'Returns & exchange?', a: '30‑day free returns. Instant exchange on size issues.'},
  ]
  return (
    <section id="faq" className="bg-zinc-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold">Questions? We’ve got answers.</h2>
        <div className="mt-6 divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-white">
          {faqs.map((f, i)=> (
            <details key={f.q} className="group open:bg-zinc-50">
              <summary className="flex cursor-pointer items-center justify-between p-4 hover:bg-zinc-50">
                <span className="font-medium">{f.q}</span>
                <span className="text-zinc-500 group-open:rotate-45 transition">＋</span>
              </summary>
              <div className="px-4 pb-4 text-sm text-zinc-600">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA(){
  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-black to-zinc-800 text-white p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Ready to upgrade your everyday tee?</h3>
            <p className="mt-1 text-sm text-zinc-300">Order now and get free shipping on ₹999+. 30‑day risk‑free trial.</p>
          </div>
          <a href="#grid" className="rounded-xl bg-white text-black px-5 py-3 text-sm font-semibold hover:bg-zinc-100">Shop best sellers</a>
        </div>
      </div>
    </section>
  )
}

function Footer(){
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white font-bold">T</span>
            <span className="font-semibold">Teemax</span>
          </div>
          <p className="mt-3 text-zinc-600">Premium staples for everyday wear.</p>
        </div>
        <div>
          <h4 className="font-semibold">Shop</h4>
          <ul className="mt-2 space-y-1 text-zinc-600">
            <li><a href="#grid" className="hover:text-black">T‑Shirts</a></li>
            <li><a href="#" className="hover:text-black">Oversized</a></li>
            <li><a href="#" className="hover:text-black">Graphics</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Help</h4>
          <ul className="mt-2 space-y-1 text-zinc-600">
            <li><a href="#faq" className="hover:text-black">FAQ</a></li>
            <li><a href="#" className="hover:text-black">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-black">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Stay in loop</h4>
          <form className="mt-2 flex gap-2">
            <input placeholder="Email address" className="flex-1 rounded-xl border border-zinc-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"/>
            <button className="rounded-xl bg-black px-4 py-2 text-white text-sm font-medium">Sign up</button>
          </form>
        </div>
      </div>
      <div className="border-t border-zinc-200 py-4 text-center text-xs text-zinc-500">© {new Date().getFullYear()} Teemax. All rights reserved.</div>
    </footer>
  )
}

function Stars({ rating = 5 }: { rating?: number }) {
  const full = Math.max(0, Math.min(5, Math.round(rating)));
  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${i < full ? "fill-yellow-400" : "fill-zinc-200"}`}
          aria-hidden
        >
          <path d="M10 1.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.9 4.8 17.5l1-5.8L1.6 7.6l5.8-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

// === Endless review strip with pauses (from our previous chat) ===
function InfiniteReviews({
  reviews,
  moveMs = 4000,
  pauseMs = 1200,
  cardMinWidth = 260,
}: {
  reviews: { text: string; author?: string; rating?: number }[];
  moveMs?: number;
  pauseMs?: number;
  cardMinWidth?: number;
}) {
  const looped = Array.from({ length: 4 }, () => reviews).flat();
  const totalMs = moveMs * 2 + pauseMs * 2;
  const maskStyle: React.CSSProperties = {
    WebkitMaskImage:
      "linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)",
    maskImage:
      "linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)",
  };
  return (
    <div className="w-full">
      <Row
        looped={looped}
        totalMs={totalMs}
        moveMs={moveMs}
        pauseMs={pauseMs}
        cardMinWidth={cardMinWidth}
        direction="left"
        maskStyle={maskStyle}
      />
      <div className="h-4" />
      <Row
        looped={looped}
        totalMs={totalMs}
        moveMs={moveMs}
        pauseMs={pauseMs}
        cardMinWidth={cardMinWidth}
        direction="right"
        maskStyle={maskStyle}
      />
      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0%); }
          45% { transform: translateX(-50%); }
          55% { transform: translateX(-50%); }
          95% { transform: translateX(-100%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-100%); }
          45% { transform: translateX(-50%); }
          55% { transform: translateX(-50%); }
          95% { transform: translateX(0%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </div>
  );
}

function Row({
  looped,
  totalMs,
  moveMs,
  pauseMs,
  cardMinWidth,
  direction,
  maskStyle,
}: {
  looped: { text: string; author?: string; rating?: number }[];
  totalMs: number;
  moveMs: number;
  pauseMs: number;
  cardMinWidth: number;
  direction: "left" | "right";
  maskStyle: React.CSSProperties;
}) {
  const Card = ({ r }: { r: { text: string; author?: string; rating?: number } }) => (
    <div
      className="shrink-0 rounded-2xl border border-zinc-200 bg-white/80 backdrop-blur p-4 shadow-sm"
      style={{ minWidth: cardMinWidth }}
    >
      <div className="flex items-center gap-2 mb-2">
        {typeof r.rating === "number" ? <Stars rating={r.rating} /> : <span className="text-xs text-zinc-400">Review</span>}
        {r.author ? <span className="text-xs text-zinc-500">• {r.author}</span> : null}
      </div>
      <p className="text-sm leading-relaxed text-zinc-700">{r.text}</p>
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden" style={maskStyle} aria-hidden>
      <div
        className="flex gap-3 will-change-transform"
        style={{
          animationName: direction === "left" ? "scroll-left" : "scroll-right",
          animationDuration: `${totalMs}ms`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        {looped.map((r, i) => (
          <Card key={`a-${i}`} r={r} />
        ))}
        {looped.map((r, i) => (
          <Card key={`b-${i}`} r={r} />
        ))}
      </div>
    </div>
  );
}

// --- Tiny inline icons ---
function Truck(){
  return <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M3 7h11v7h2l3-4h2v7h-2a2 2 0 1 1-4 0H9a2 2 0 1 1-4 0H3V7zm4 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm10 0a1 1 0 1 0 .001 2.001A1 1 0 0 0 17 16z"/></svg>
}
function Shield(){
  return <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M12 2l7 3v6c0 5-3.4 9.7-7 11-3.6-1.3-7-6-7-11V5l7-3z"/></svg>
}
function Leaf(){
  return <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M3 21s9 1 14-4S21 3 21 3 3 7 3 21zm0 0s6-6 12-12" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
}
function Spark(){
  return <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z"/></svg>
}
