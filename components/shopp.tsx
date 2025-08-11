"use client";

import { useMemo, useState } from "react";

type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
  sizes: string[];
};

const PRODUCTS: Product[] = Array.from({ length: 8 }).map((_, i) => ({
  id: `tee-${i + 1}`,
  title: `Lunoir Tee ${i + 1}`,
  price: 799 + (i % 3) * 100, // demo pricing
  image: `https://placehold.co/600x600/png?text=Tee+${i + 1}`, // demo image
  sizes: ["S", "M", "L", "XL"],
}));

type CartItem = {
  id: string;
  title: string;
  price: number;
  qty: number;
  size: string;
};

export default function Page() {
  const [selectedSize, setSelectedSize] = useState<Record<string, string>>(
    Object.fromEntries(PRODUCTS.map((p) => [p.id, p.sizes[0]]))
  );
  const [quantities, setQuantities] = useState<Record<string, number>>(
    Object.fromEntries(PRODUCTS.map((p) => [p.id, 1]))
  );
  const [cart, setCart] = useState<CartItem[]>([]);

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.qty, 0),
    [cart]
  );
  const cartTotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.qty, 0),
    [cart]
  );

  const changeSize = (id: string, size: string) => {
    setSelectedSize((s) => ({ ...s, [id]: size }));
  };

  const decQty = (id: string) => {
    setQuantities((q) => ({ ...q, [id]: Math.max(1, (q[id] ?? 1) - 1) }));
  };

  const incQty = (id: string) => {
    setQuantities((q) => ({ ...q, [id]: (q[id] ?? 1) + 1 }));
  };

  const addToCart = (p: Product) => {
    const qty = quantities[p.id] ?? 1;
    const size = selectedSize[p.id] ?? p.sizes[0];
    setCart((prev) => {
      // merge if same product+size already in cart
      const idx = prev.findIndex((c) => c.id === p.id && c.size === size);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + qty };
        return copy;
      }
      return [
        ...prev,
        { id: p.id, title: p.title, price: p.price, qty, size },
      ];
    });
    // reset qty to 1 after adding (optional)
    setQuantities((q) => ({ ...q, [p.id]: 1 }));
  };

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Header / Cart Summary */}
      <header className="sticky top-0 z-10 border-b border-black bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold tracking-tight">Lunoir Store</h1>
          <div className="flex items-center gap-6">
            <div className="text-sm">
              <span className="font-medium">Items:</span> {cartCount}
            </div>
            <div className="text-sm">
              <span className="font-medium">Total:</span> ₹{cartTotal}
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-6">
        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {PRODUCTS.map((p) => (
            <article
              key={p.id}
              className="group flex flex-col border border-black rounded-2xl overflow-hidden"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col gap-3 p-4">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-base font-medium">{p.title}</h2>
                  <div className="text-base font-semibold">₹{p.price}</div>
                </div>

                {/* Sizes */}
                <div className="flex flex-wrap gap-2" role="group" aria-label="Select size">
                  {p.sizes.map((s) => {
                    const selected = selectedSize[p.id] === s;
                    return (
                      <button
                        key={s}
                        onClick={() => changeSize(p.id, s)}
                        aria-pressed={selected}
                        className={[
                          "px-3 py-1 text-sm border border-black rounded-full transition",
                          selected ? "ring-1 ring-black" : "opacity-80 hover:opacity-100",
                          "focus:outline-none focus:ring-2 focus:ring-black"
                        ].join(" ")}
                        title={`Size ${s}`}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>

                {/* Quantity + Add */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center border border-black rounded-full overflow-hidden">
                    <button
                      onClick={() => decQty(p.id)}
                      className="px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <div className="px-3 py-2 text-sm min-w-8 text-center select-none">
                      {quantities[p.id] ?? 1}
                    </div>
                    <button
                      onClick={() => incQty(p.id)}
                      className="px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => addToCart(p)}
                    className="px-4 py-2 text-sm border border-black rounded-full focus:outline-none focus:ring-2 focus:ring-black transition active:scale-[0.98]"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Simple Cart List (optional, for demo) */}
        {cart.length > 0 && (
          <div className="mt-10 border-t border-black pt-6">
            <h3 className="text-lg font-semibold mb-4">Cart (demo preview)</h3>
            <ul className="space-y-2">
              {cart.map((item, idx) => (
                <li
                  key={`${item.id}-${item.size}-${idx}`}
                  className="flex justify-between border border-black rounded-xl p-3"
                >
                  <div className="flex flex-col">
                    <span className="text-sm">{item.title}</span>
                    <span className="text-xs opacity-80">Size: {item.size}</span>
                  </div>
                  <div className="text-sm">
                    {item.qty} × ₹{item.price} = <span className="font-medium">₹{item.qty * item.price}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </main>
  );
}
