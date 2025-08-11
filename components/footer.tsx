import Link from "next/link";
import Image from "next/image";

export default function Footer()
{
    return(
        <>
        
        <div className="w-screen flex flex-row justify-around items-center p-5 h-60 gap-5 bg-white  text-black">
            <div className="flex-col items-center justify-center hidden md:flex ">
                <div className="overflow-hidden h-20 flex justify-center items-center">
                    <Link href={'/'}><Image src={'/Logo.gif'} alt="menu" width={150} height={50} className="fliter invert"/></Link>
                </div>
                <h1>designed for your comfort</h1>
            </div>
            <div className="flex flex-col h-30 justify-around">
                <h1 className="font-black">Help</h1>
                <Link href={'/tp'}className="text-gray-500 hover:text-black">track packages</Link>
                <Link href={'/wreview'}className="text-gray-500 hover:text-black">write a review</Link>
                <Link href={'/help'}className="text-gray-500 hover:text-black">contact us</Link>
            </div>
            <div className="flex flex-col h-30  justify-around">
                <h1 className="font-black">Extra</h1>

                <Link href={'/about'} className="text-gray-500 hover:text-black">about</Link>
                <Link href={'/tc'}className="text-gray-500 hover:text-black">terms & conditions</Link>
                <Link href={'/copyright'}className="text-gray-500 hover:text-black">copyright terms</Link>
            </div>
            <div className=" w-1/6 h-full rounded-lg overflow-hidden flex-col items-center justify-center hidden md:flex ">
                <div className="flex flex-row justify-center items-center h-15">
                    <Image src={'/sendus.gif'} alt="send designs" width={150} height={150}/>
                </div>

                <div className="mt-5">
                    <div className=" w-auto rounded-4xl border border-white bg-black flex justify-center items-center shadow-lg hover:filter hover:invert  duration-300 ease-in-out">
                        <div className="absolute flex flex-row items-center justify-center">
                            <Image src={'/icons/down-icon.png'} alt="down-arrow" width={20} height={20} className="filter invert mr-2"/>

                            <span className="block text-white font-semibold text-sm">Upload Your Files</span>
                        </div>
                        <input
                        name=""
                        className="h-full w-full opacity-0 cursor-pointer"
                        type="file"
                        />
                    </div>
                </div>
            </div>

        </div>
        <div className="w-screen p-5 flex justify-center text-xs bg-zinc-100">
            <p>© Lunoir Co. 2025. All Rights Reserved</p>

        </div>
        </>
    );
}