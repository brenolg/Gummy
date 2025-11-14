import BuyContainer from "./BuyContainer";
import Header from "./Header";
import InfoCarousel from "./InfoCarousel";
import InstaFeedCarousel from "./InstaFeedCarousel";
import { Banner, FirstBanner } from "./styles";
import banner1 from '@/assets/imgs/banner1.png'
import formula from '@/assets/imgs/formula.svg'
import FAQ from "./FAQ";
import {faqData} from './FAQ/factory'
import Ingredients from "./Ingredients";

export default function Home() {

  return (
    <div>
      <Header/>
      <FirstBanner src={banner1 }/>
      <InfoCarousel/>
      <Ingredients/>
      <FAQ items={ faqData } contactCtaHref="/contato" />
      <Banner src={formula }/>
      <BuyContainer/>
      <InstaFeedCarousel/>

  
      
    </div>
  )
}
