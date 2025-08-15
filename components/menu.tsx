import Link from "next/link";
import Image from "next/image";

export default function Menu({openMenu, setOpenMenu}:{openMenu:boolean; setOpenMenu:React.Dispatch<React.SetStateAction<boolean>>})
{
    return(
        <div className={`flex flex-col bg-black opacity-85 w-2/3 md:w-1/4 h-screen text-white fixed top-0 left-0 ${openMenu?'flex flex-col':'hidden'}`}>
            <button className={`flex h-20 justify-center items-center w-fit ml-10 text-white text-4xl z-10 ${openMenu?'':'hidden'}`} onClick={()=>{setOpenMenu(!openMenu)}}>
                <Image src={'/icons/cross.png'} alt='cross' width={40} height={40}/>
            </button> 
            <button className={`fixed w-1/3 md:w-3/4  h-screen top-0 right-0 z-10 ${openMenu?'':'hidden'}`} onClick={()=>{setOpenMenu(!openMenu)}}>
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
    );
}