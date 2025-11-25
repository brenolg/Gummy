import { useRef, useState } from "react";
import {  CardsWrapper, Subtitle, Title,  } from "./styles";
import video1 from "@/assets/videos/test1.mp4"
import bef1 from "@/assets/imgs/bef1.jpeg"
import after1 from "@/assets/imgs/after1.jpeg"
import VideoCard from "./VideoCard";
import BeforeAfterCard from "./BeforeAfterCard";
import { MainButton } from "@/components";
import { useNavigate } from "react-router-dom";

type DepVideo = {
  isVideo: true;
  videoUrl: string;
  text: string;
};

type DepBeforeAfter = {
  isVideo: false;
  before: string;
  after: string;
  label: string;
  time: string;
};

type Depoimento = DepVideo | DepBeforeAfter;

const depoimentos: Depoimento[]  = [
  {
    isVideo: true,
    videoUrl: video1,
    text: 'Notei muita diferença no meu cabelo, na minha pele e na minha unha',
  },
  {
    isVideo: false,
    before: bef1,
    after: after1,
    label: "Unhas mais resistentes",
    time: '6 semanas'
  },
    {
    isVideo: true,
    videoUrl: video1,
    text: 'Notei muita diferença no meu cabelo, na minha pele e na minha unha',
  },
  {
    isVideo: false,
    before: bef1,
    after: after1,
    label: "Unhas mais resistentes",
    time: '6 semanas'
  },
    {
    isVideo: false,
    before: bef1,
    after: after1,
    label: "Unhas mais resistentes",
    time: '6 semanas'
  },
];

export default function Transformations() {
  const navigate = useNavigate();
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  function goToCheckout() {
    navigate("/checkout");
  }
  
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
    <>
    <Title>Trasformações</Title>
    <Subtitle>falam mais que palavras</Subtitle>
    
    <CardsWrapper className="xxxxxxxxxx"
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
    {depoimentos.map((dep, i) =>
      dep.isVideo ? (
        <VideoCard 
          key={i}
          text={dep.text}
          videoUrl={dep.videoUrl}
        />
      ) : (
        <BeforeAfterCard
          key={i}
          beforeSrc={dep.before}
          afterSrc={dep.after}
          title={dep.label}
          timeText={dep.time}
        />
      )
    )}
    </CardsWrapper>
    <MainButton maxW={659} onClick={goToCheckout}>GARANTIR MEU TRATAMENTO HOJE</MainButton>
  </>
  );
}
