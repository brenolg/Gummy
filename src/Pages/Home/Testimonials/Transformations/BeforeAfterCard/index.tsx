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
    <Card onTouchMove={(e) => e.preventDefault()} onWheel={(e) => e.preventDefault()}>
      <ImageArea>
        <ReactCompareImage
          leftImage={beforeSrc}
          rightImage={afterSrc}
          sliderLineWidth={0}
          hover={false}
          handle={
            <CustomHandle
              className="custom-handle-drag"
              onPointerDown={(e) => {
                e.stopPropagation() // ✅ não deixa subir pro carousel
                e.currentTarget.setPointerCapture(e.pointerId)
              }}
              onPointerUp={(e) => {
                e.currentTarget.releasePointerCapture(e.pointerId)
              }}
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
