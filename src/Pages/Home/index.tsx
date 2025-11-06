import Header from "./Header";
import InfoCarousel from "./InfoCarousel";
import { FirstBanner } from "./styles";
import banner1 from '@/assets/imgs/banner1.png'


export default function Home() {

  return (
    <div>
      <Header/>
      <FirstBanner src={banner1 }/>
      <InfoCarousel/>
  
      
    </div>
  )
}
