import Image from "next/image";

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

export default function ProductGrid() {
  const products = [
    { id: 1, name: 'Rosy Posies', price: 799, color: 'Jet Blue', badge: 'Best Seller', image: '/images/shirts/1.jpeg' },
    { id: 2, name: 'Flower Warrior', price: 899, color: 'Bone', badge: 'Limited', image: '/images/shirts/2.jpeg' },
    { id: 3, name: 'Ocean and Life', price: 699, color: 'White', badge: 'New', image: '/images/shirts/3.jpeg' },
    { id: 4, name: 'Poppies and Cherries', price: 849, color: 'Jet Blue', badge: 'Hot' , image: '/images/shirts/4.jpeg'},
    { id: 5, name: 'Off White Floral', price: 799, color: 'Creamy White', badge: 'Best Seller', image: '/images/shirts/5.jpeg' },
    { id: 6, name: 'Oh My Stars', price: 899, color: 'Bluey Blue', badge: 'Limited', image: '/images/shirts/6.jpeg' },
    { id: 7, name: 'Basic Ah Hoodie', price: 699, color: 'Charcoal', badge: 'New', image: '/images/shirts/9.webp' },
    { id: 8, name: 'Floral King', price: 849, color: 'Off White', badge: 'Hot' , image: '/images/shirts/8.jpeg'},
  ]
  return (
    <section id="grid" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-bold">Best sellers</h2>
      </div>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((p)=> (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  )
}

function ProductCard({name, price, color, badge, image}:{name:string; price:number; color:string; badge:string; image:string}){
  return (
    <a href="#" className="group rounded-2xl bg-white border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-square ">
        <div className="absolute inset-0 grid place-items-center bg-zinc-100 overflow-hidden">
            <Image src={image} alt={name} width={200} height={200} className="w-full items-center justify-center flex"/>
        </div>
        <span className="absolute left-2 top-2 rounded-full bg-black px-2 py-1 text-[10px] font-medium text-white">{badge}</span>
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium line-clamp-1">{name}</h3>
          <span className="text-sm font-semibold">₹{price}</span>
        </div>
        <p className="mt-1 text-xs text-zinc-500">{color}</p>
        <div className="mt-2 flex items-center gap-1 text-[10px] text-zinc-600"><Stars rating={4}/> <span>1.2k</span></div>
        <button className="mt-3 w-full rounded-xl bg-black py-2 text-white text-sm font-medium hover:bg-zinc-800 active:scale-[.99]">Add to cart</button>
      </div>
    </a>
  )
}