import Image from "next/image";

export default function Cart({openCart, setOpenCart}:{openCart:boolean; setOpenCart:React.Dispatch<React.SetStateAction<boolean>>})
{
    return(
        <div className={`flex flex-col items-end text-right bg-black opacity-85 w-2/3 md:w-1/4 h-screen text-white fixed top-0 right-0 ${openCart?'flex flex-col':'hidden'}`}>
            <button className={`flex h-20 justify-center items-center w-fit mr-10 text-white text-4xl z-10 ${openCart?'':'hidden'}`} onClick={()=>{setOpenCart(!openCart)}}>
                <Image src={'/icons/cross.png'} alt='cross' width={40} height={40}/>
            </button>
            <button className={`fixed w-1/3 md:w-3/4  h-screen top-0 left-0 z-10 ${openCart?'':'hidden'}`} onClick={()=>{setOpenCart(!openCart)}}>
            </button>
            <div className="flex flex-col justify-around h-1/2 mr-10">
                dsakdlak askdlka sdlkajd
                asdkjsaldlajldkasjldkj
            </div>
        </div>

    );
}