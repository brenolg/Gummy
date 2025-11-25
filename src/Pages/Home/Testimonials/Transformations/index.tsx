import { useRef, useState } from "react";
import { Card, CardsWrapper } from "../styles";
import video1 from "@/assets/videos/test1.mp4"
import bef1 from "@/assets/imgs/bef1.jpeg"
import after1 from "@/assets/imgs/after1.jpeg"
import VideoCard from "./VideoCard";

const depoimentos = [
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
];

export default function Transformations() {
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
          <div className="line" />
        
        </Card>
      ))}
      <VideoCard

      text="Notei muita diferença no meu cabelo, na minha pele e na minha unha"
      videoUrl={video1}
      />
    </CardsWrapper>
  );
}
