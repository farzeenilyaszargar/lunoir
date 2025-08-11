import Image from "next/image";

export default function Trust()
{
    return(
        <div className="w-screen overflow-hidden flex flex-col justify-around items-center pt-5 pb-5 bg-zinc-100">
            <h1 className="text-sm text-zinc-400 mb-5">powered by</h1>
            <div className="flex flex-row justify-around items-center w-screen">
                <Image src={'/images/paytm.png'} alt="paytm" width={100} height={50}/>
                <Image src={'/images/delhivery.png'} alt="dehlivery" width={100} height={50}/>
                <Image src={'/images/razorpay.svg'} alt="razorpay" width={100} height={50}/>
                <Image src={'/images/delhivery.png'} alt="dehlivery" width={100} height={50}/>

            </div>
        </div>
    );
}