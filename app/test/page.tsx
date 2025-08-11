// app/_components/cart/CartIcon.tsx
"use client";

import React, { createContext, useContext, useMemo, useReducer } from "react";

type CartItem = { id: string; title: string; price: number; qty: number };
type CartState = { items: Record<string, CartItem> };

type Action =
  | { type: "ADD_OR_SET"; payload: { id: string; title: string; price: number; qty: number } }
  | { type: "INCREMENT"; payload: { id: string } }
  | { type: "DECREMENT"; payload: { id: string } }
  | { type: "REMOVE"; payload: { id: string } };

const CartCtx = createContext<{
  state: CartState;
  dispatch: React.Dispatch<Action>;
  totalQty: number;
} | null>(null);

function reducer(state: CartState, action: Action): CartState {
  const next = { ...state.items };
  switch (action.type) {
    case "ADD_OR_SET": {
      const { id, title, price, qty } = action.payload;
      if (qty <= 0) { delete next[id]; break; }
      next[id] = { id, title, price, qty };
      break;
    }
    case "INCREMENT": {
      const it = next[action.payload.id];
      if (!it) break;
      next[it.id] = { ...it, qty: it.qty + 1 };
      break;
    }
    case "DECREMENT": {
      const it = next[action.payload.id];
      if (!it) break;
      const q = it.qty - 1;
      if (q <= 0) delete next[it.id];
      else next[it.id] = { ...it, qty: q };
      break;
    }
    case "REMOVE": {
      delete next[action.payload.id];
      break;
    }
  }
  return { items: next };
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: {} });
  const totalQty = useMemo(
    () => Object.values(state.items).reduce((s, it) => s + it.qty, 0),
    [state.items]
  );
  return (
    <CartCtx.Provider value={{ state, dispatch, totalQty }}>
      {children}
    </CartCtx.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartCtx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}


export default function CartIcon() {
  const { totalQty } = useCart();
  return (
    <button
      aria-label="Cart"
      className="relative inline-flex items-center justify-center w-10 h-10 rounded-full border"
    >
      {/* Simple cart glyph */}
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor">
        <path d="M3 3h2l.4 2M7 13h10l3-8H6.4" strokeWidth="1.5" />
        <circle cx="9" cy="19" r="1.5" />
        <circle cx="17" cy="19" r="1.5" />
      </svg>

      {/* Badge that updates */}
      {totalQty > 0 && (
        <span
          className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full text-xs
                     flex items-center justify-center border bg-black text-white"
        >
          {totalQty}
        </span>
      )}
    </button>
  );
}
