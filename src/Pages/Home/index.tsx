import BuyContainer from "./BuyContainer";
import Header from "./Header";
import InfoCarousel from "./InfoCarousel";
import InstaFeedCarousel from "./InstaFeedCarousel";
import {  FirstBanner } from "./styles";
import banner1 from '@/assets/imgs/banner1.png'
import FAQ from "./FAQ";
import {faqData} from './FAQ/factory'
import Ingredients from "./Ingredients";
import Hero from "./Hero";
import ScienceSection from "./ScienceSection";
import BenefitsSection from "./BenefitsSection";
import Footer from "./Footer";

export default function Home() {

  return (
    <div>
      <Header/>
      <FirstBanner src={banner1 }/>
      <InfoCarousel/>
      <Hero/>
      <ScienceSection/>
      <Ingredients/>
      <BenefitsSection/>
      <BuyContainer/>
      <InstaFeedCarousel/>
      <FAQ items={ faqData } contactCtaHref="/contato" />
      <Footer/>

  
      
    </div>
  )
}
