import Image from "next/image";


export default function Cart({openCart, setOpenCart}:{openCart:boolean; setOpenCart:React.Dispatch<React.SetStateAction<boolean>>})
{
    return(
    <div>
        <div className={`flex flex-col items-end bg-white opacity-95 w-2/3 md:w-1/3 h-screen text-black fixed top-0 right-0 z-10 transition-all ease-in-out duration-500 ${openCart?"translate-x-0" : "translate-x-full"}`}>
            <button className={`flex h-20 justify-center items-center w-fit  mr-10 text-white text-4xl z-10`} onClick={()=>{setOpenCart(!openCart)}}>
                <Image src={'/icons/cross.png'} alt='cross' width={40} height={40} className="invert"/>
            </button> 
            <div className="flex flex-col items-center min-w-full">
                <div className="w-3/4 h-50 border rounded ">
                    akjshdkjashdkahkjdsh
                </div>
                
            </div>
            
        </div>
        <button className={`fixed w-full bg-black opacity-20 h-screen top-0 right-0 z-5 ${openCart?'':'hidden'}`} onClick={()=>{setOpenCart(!openCart)}}>
        </button>
    </div>

    );
}