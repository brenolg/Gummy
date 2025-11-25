// Testimonials.tsx
import { useRef, useState } from "react";
import {
  Wrapper,
  TitleArea,
  SubTitle,
  Title,
  CardsWrapper,
  Card,
  Stars,
  Name,
  Text,
} from "./styles";
import Transformations from "./Transformations";

const depoimentos = [
  {
    name: "Laura Schneider",
    text: "Eu amei as gominhas! meus cabelos estão muito melhores desde que comecei a tomar elas, minhas unhas sempre demoravam para crescer e depois das gomi...",
  },
  {
    name: "Kawani Castro",
    text: "Estou finalizando o segundo pote e diminuiu muito a queda, absurdamente, e a minha unha está melhor.",
  },
  {
    name: "Nete Mostaço",
    text: "Estou em um tratamento de câncer de mama e uso medicação muito forte onde meu cabelo começou a cair, minha pele ficou muito ressecada e minha unhas...",
  },
  {
    name: "Sarah Sabedot",
    text: "Estou amando muito o resultado da Power Gummy, tem menos de 1 mês que estou tomando e já sinto minha unha crescendo mais rápido...",
  },
];

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    const slider = sliderRef.current;
    startXRef.current = e.pageX - slider.offsetLeft;
    scrollLeftRef.current = slider.scrollLeft;
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const slider = sliderRef.current;
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startXRef.current) * 1.2; // velocidade
    slider.scrollLeft = scrollLeftRef.current - walk;
  };

  // touch (mobile) – opcional, mas deixa a experiência consistente
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    const slider = sliderRef.current;
    const touch = e.touches[0];
    startXRef.current = touch.pageX - slider.offsetLeft;
    scrollLeftRef.current = slider.scrollLeft;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current) return;
    const slider = sliderRef.current;
    const touch = e.touches[0];
    const x = touch.pageX - slider.offsetLeft;
    const walk = (x - startXRef.current) * 1.2;
    slider.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <Wrapper id="depoimentos">
      <TitleArea>
        <SubTitle>O QUE ESTÃO FALANDO</SubTitle>
        <Title>
          Depoimentos <span>Power Gummy</span>
        </Title>
      </TitleArea>

      <CardsWrapper
        ref={sliderRef}
        $isDragging={isDragging}
        onMouseDown={handleMouseDown}
        onMouseLeave={stopDragging}
        onMouseUp={stopDragging}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {depoimentos.map((dep, i) => (
          <Card
            key={i}
            $isFirst={i === 0}
            $isLast={i === depoimentos.length - 1}
          >
            <Stars>★★★★★</Stars>
            <Name>{dep.name}</Name>
            <div className="line" />
            <Text>{dep.text}</Text>
          </Card>
        ))}
      </CardsWrapper>

      <Transformations />
    </Wrapper>
  );
}
