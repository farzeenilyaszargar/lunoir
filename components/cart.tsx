import Image from "next/image";


export default function Cart({openCart, setOpenCart}:{openCart:boolean; setOpenCart:React.Dispatch<React.SetStateAction<boolean>>})
{
    return(
    <div>
        <div className={`flex flex-col bg-white opacity-95 w-2/3 md:w-1/4 h-screen text-black fixed top-0 right-0 z-10 transition-all ease-in-out duration-500 ${openCart?"translate-x-0" : "translate-x-full"}`}>
            <button className={`flex h-20 justify-center items-center w-fit ml-10 text-white text-4xl z-10`} onClick={()=>{setOpenCart(!openCart)}}>
                <Image src={'/icons/cross.png'} alt='cross' width={40} height={40} className="invert"/>
            </button> 
            <div className="flex flex-col justify-around h-1/2 ml-10">
                <p>akjdhaksjdhakjdhakshdk</p>
            </div>
            
        </div>
        <button className={`fixed w-full bg-black opacity-20 h-screen top-0 right-0 z-5 ${openCart?'':'hidden'}`} onClick={()=>{setOpenCart(!openCart)}}>
        </button>
    </div>

    );
}