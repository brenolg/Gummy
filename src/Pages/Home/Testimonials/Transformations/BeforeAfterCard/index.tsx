import ReactCompareImage from 'react-compare-image'
import handleImg from '@/assets/icons/fav.svg'
import clock from '@/assets/icons/clock.svg'
import { Content, Card, ImageArea, CustomHandle, Icon, FooterText, Footer, Title } from './styles'

type Props = {
  beforeSrc: string
  afterSrc: string
  title: string
  timeText?: string
  onDragCompareStart?: () => void
  onDragCompareEnd?: () => void
}

export default function BeforeAfterCard({
  beforeSrc,
  afterSrc,
  title,
  timeText,
  onDragCompareStart,
  onDragCompareEnd,
}: Props) {
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
              onPointerDown={(e) => {
                e.stopPropagation()
                e.currentTarget.setPointerCapture(e.pointerId)
                onDragCompareStart?.() // 🔒 trava carrossel
              }}
              onPointerMove={(e) => {
                e.stopPropagation()
                e.preventDefault()
              }}
              onPointerUp={(e) => {
                e.stopPropagation()
                e.currentTarget.releasePointerCapture(e.pointerId)
                onDragCompareEnd?.() // 🔓 libera carrossel
              }}
              onPointerCancel={() => {
                onDragCompareEnd?.()
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
