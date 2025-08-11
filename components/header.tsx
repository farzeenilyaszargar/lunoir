'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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


function USPStrip() {
  return (
    <div className=" border-b bg-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3 py-2 text-xs text-zinc-700">
          <span className="inline-flex items-center gap-2"><Shield /> Pay On Delivery Availible</span>
          <span className="hidden sm:inline">•</span>
          <span className="inline-flex items-center gap-2"><Truck /> Free shipping</span>
          <span className="hidden sm:inline">•</span>
          <span className="inline-flex items-center gap-2"><Leaf /> 240 GSM, 100% cotton</span>
          <span className="hidden sm:inline">•</span>
          <span className="inline-flex items-center gap-2"><Spark /> Pre‑shrunk, no fade</span>
        </div>
      </div>
    </div>
  )
}


export default function Header()
{
    const [openMenu, setOpenMenu] = useState(false);
    const [openCart, setOpenCart] = useState(false);



    return(
        <div className="sticky top-0 z-20">

        <div className="flex flex-row items-center w-screen justify-between border-b h-20 bg-white text-black overflow-hidden" >
            <button onClick={()=>setOpenMenu(!openMenu)}><Image src={'/icons/menuu.gif'} alt="menu" width={40} height={40} className="ml-10 fliter invert"></Image></button>
            <Link href={'/'}><Image src={'/Logo.gif'} alt="menu" width={250} height={100} className="fliter invert"/></Link>

            
            <button onClick={()=>setOpenCart(!openCart)}><Image src={'/icons/cart.gif'} alt="menu" width={40} height={40} className="mr-10 fliter invert"></Image></button>
            
            <div className={`flex flex-col bg-black opacity-85 w-1/4 h-screen text-white fixed top-0 left-0 ${openMenu?'flex flex-col':'hidden'}`}>
                <button className={`flex h-20 justify-center items-center w-fit ml-10 text-white text-4xl z-10 ${openMenu?'':'hidden'}`} onClick={()=>{setOpenMenu(!openMenu)}}>
                    <Image src={'/icons/cross.png'} alt='cross' width={40} height={40}/>
                </button>
                <button className={`fixed w-3/4  h-screen top-0 right-0 z-10 ${openMenu?'':'hidden'}`} onClick={()=>{setOpenMenu(!openMenu)}}>
                </button>
                <div className="flex flex-col justify-around h-1/2 ml-10">
                    <Link href={'/about'} className="hover:font-black">about</Link>
                    <Link href={'/tp'}className="hover:font-black">track packages</Link>
                    <Link href={'/wreview'}className="hover:font-black">write a review</Link>
                    <Link href={'/help'}className="hover:font-black">need help?</Link>
                    <Link href={'/tc'}className="hover:font-black">terms & conditions</Link>
                    <Link href={'/copyright'}className="hover:font-black">copyright terms</Link>
                </div>
            </div>
            <div className={`flex flex-col items-end text-right bg-black opacity-85 w-1/4 h-screen text-white fixed top-0 right-0 ${openCart?'flex flex-col':'hidden'}`}>
                <button className={`flex h-20 justify-center items-center w-fit mr-10 text-white text-4xl z-10 ${openCart?'':'hidden'}`} onClick={()=>{setOpenCart(!openCart)}}>
                    <Image src={'/icons/cross.png'} alt='cross' width={40} height={40}/>
                </button>
                <button className={`fixed w-3/4  h-screen top-0 left-0 z-10 ${openCart?'':'hidden'}`} onClick={()=>{setOpenCart(!openCart)}}>
                </button>
                <div className="flex flex-col justify-around h-1/2 mr-10">
                    dsakdlak askdlka sdlkajd
                    asdkjsaldlajldkasjldkj
                </div>
            </div>
        </div>
        <USPStrip/>
        </div>

    );

}