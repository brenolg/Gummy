import Header from "./Header";
import InfoCarousel from "./InfoCarousel";
import { InstaFeed } from "./InstaFeed";
import { FirstBanner } from "./styles";
import banner1 from '@/assets/imgs/banner1.png'


export default function Home() {

  return (
    <div>
      <Header/>
      <FirstBanner src={banner1 }/>
      <InstaFeed/>
      <InfoCarousel/>

  
      
    </div>
  )
}
