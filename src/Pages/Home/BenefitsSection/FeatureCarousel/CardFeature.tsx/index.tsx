import { CardContainer, ImageSection, ContentSection, TextContent, Title, Subtext } from './styles'

type Props = {
  img: string
  text: string
  subtext: string
  alt: string
}

export default function CardFeature({ img, text, subtext, alt }: Props) {
  return (
    <CardContainer>
      <ImageSection src={img} style={{ backgroundImage: `url(${img})` }} alt={alt} />

      <ContentSection>
        <TextContent>
          <Title>{text}</Title>
          <Subtext>{subtext}</Subtext>
        </TextContent>
      </ContentSection>
    </CardContainer>
  )
}
