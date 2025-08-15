import Banner from "@/components/banners";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Marquee from "@/components/marquee";
import Reviews from "@/components/reviews";
import Shop from "@/components/shop";
import Trust from "@/components/trust";
import WhyUs from "@/components/whyus";
import Image from "next/image";
import Load from '@/components/load';
import Shopp from '@/components/shopp';


export default function Home() {
  return (
    <div >
       
      <Load/>
      <Header/>
      <Banner/>
      <Shop/>

      <Reviews/>

      <FAQ/>
      <Trust/>
      <Footer/>
    </div>
  );
}
