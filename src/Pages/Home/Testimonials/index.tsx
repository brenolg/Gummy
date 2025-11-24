import { Wrapper, TitleArea, SubTitle, Title, CardsWrapper, Card, Stars, Name, Text } from "./styles";
import Transformations from "./Transformations";

const depoimentos = [
  {
    name: "Laura Schneider",
    text: "Eu amei as gominhas! meus cabelos estão muito melhores desde que comecei a tomar elas, minhas unhas sempre demoravam para crescer e depois das gomi...",
  },
  {
    name: "Laura Schneider",
    text: "Eu amei as gominhas! meus cabelos estão muito melhores desde que comecei a tomar elas, minhas unhas sempre demoravam para crescer e depois das gomi...",
  },
  {
    name: "Laura Schneider",
    text: "Eu amei as gominhas! meus cabelos estão muito melhores desde que comecei a tomar elas, minhas unhas sempre demoravam para crescer e depois das gomi...",
  },
];

export default function Testimonials() {
  return (
    <Wrapper id='depoimentos'>
      <TitleArea>
        <SubTitle>O QUE ESTÃO FALANDO</SubTitle>
        <Title>Depoimentos <span>Power Gummy</span></Title>
      </TitleArea>

      <CardsWrapper>
        {depoimentos.map((dep, i) => (
          <Card key={i}>
            <Stars>★★★★★</Stars>
            <Name>{dep.name}</Name>
            <div className="line"/>
            <Text>{dep.text}</Text>
          </Card>
        ))}
      </CardsWrapper>

      <Transformations/>
    </Wrapper>
  );
}
