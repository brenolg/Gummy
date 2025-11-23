import { 
  CardContainer,
  ImageSection,
  ContentSection,
  IconWrapper,
  TextContent,
  Title,
  Subtext
} from "./styles";

type Props = {
  img: string;
  icon: string;
  text: string;
  subtext: string;
};

export default function CardFeature({ img, icon, text, subtext }: Props) {
  return (
    <CardContainer>
      <ImageSection style={{ backgroundImage: `url(${img})` }} />

      <ContentSection>
        <IconWrapper>
          <img src={icon} alt="icon" />
        </IconWrapper>

        <TextContent>
          <Title>{text}</Title>
          <Subtext>{subtext}</Subtext>
        </TextContent>
      </ContentSection>
    </CardContainer>
  );
}
