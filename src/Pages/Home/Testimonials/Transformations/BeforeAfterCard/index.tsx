import ReactCompareImage from 'react-compare-image'
import handleImg from '@/assets/icons/fav.svg'
import clock from '@/assets/icons/clock.svg'
import { Content, Card, ImageArea, CustomHandle, Icon, FooterText, Footer, Title } from './styles'

type Props = {
  beforeSrc: string
  afterSrc: string
  title: string
  timeText?: string
}

export default function BeforeAfterCard({ beforeSrc, afterSrc, title, timeText }: Props) {
  return (
    <Card>
      <ImageArea>
        <ReactCompareImage
          leftImage={beforeSrc}
          rightImage={afterSrc}
          sliderLineWidth={0}
          hover={false}
          handle={
            <CustomHandle
              onMouseDown={(e) => e.stopPropagation()}
              onTouchStart={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
            >
              <img src={handleImg} alt="arrastar" />
            </CustomHandle>
          }
        />
      </ImageArea>

      <Content>
        <Title>{title}</Title>
        {timeText && (
          <Footer>
            <Icon src={clock} />
            <FooterText>{timeText}</FooterText>
          </Footer>
        )}
      </Content>
    </Card>
  )
}
