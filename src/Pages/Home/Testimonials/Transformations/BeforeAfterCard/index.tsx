import React, { useRef, useState, useEffect } from "react";
import {
  Card,
  ImageContainer,
  BaseImage,
  OverlayImageWrapper,
  OverlayImage,
  LabelsRow,
  Label,
  Content,
  Title,
  Footer,
  FooterIcon,
  FooterText,   
} from "./styles";
import befI from "@/assets/imgs/befIcon.svg"
import afterI from "@/assets/imgs/afterIcon.svg"
import clock from "@/assets/icons/clock.svg"

type BeforeAfterCardProps = {
  beforeSrc: string;
  afterSrc: string;
  title: string;        // Ex: "Unhas mais resistentes"
  timeText?: string;    // Ex: "6 semanas"
};

const BeforeAfterCard: React.FC<BeforeAfterCardProps> = ({
  beforeSrc,
  afterSrc,
  title,
  timeText = "",
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [percent, setPercent] = useState(50);
  const [dragging, setDragging] = useState(false);

  // calcula a posição em % de acordo com o X
  const updatePositionFromClientX = (clientX: number) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    let x = clientX - rect.left;

    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;

    const p = (x / rect.width) * 100;
    setPercent(p);
  };

  const startDragMouse = (e: React.MouseEvent) => {
    e.preventDefault();
    setDragging(true);
    updatePositionFromClientX(e.clientX);
  };

  const startDragTouch = (e: React.TouchEvent) => {
    setDragging(true);
    const touch = e.touches[0];
    if (touch) updatePositionFromClientX(touch.clientX);
  };

  useEffect(() => {
    if (!dragging) return;

    const onMove = (e: MouseEvent) => {
      e.preventDefault();
      updatePositionFromClientX(e.clientX);
    };

    const onMoveTouch = (e: TouchEvent) => {
      const touch = e.touches[0] ?? e.changedTouches[0];
      if (touch) updatePositionFromClientX(touch.clientX);
    };

    const stopDrag = () => setDragging(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("touchmove", onMoveTouch, { passive: false });
    window.addEventListener("touchend", stopDrag);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", stopDrag);
      window.removeEventListener("touchmove", onMoveTouch);
      window.removeEventListener("touchend", stopDrag);
    };
  }, [dragging]);

  return (
    <Card>
    <ImageContainer
      ref={containerRef}
      onMouseDown={startDragMouse}
      onTouchStart={startDragTouch}
    >
      <BaseImage src={afterSrc} alt="Depois" />

      <OverlayImageWrapper style={{ width: `${percent}%` }}>
        <OverlayImage src={beforeSrc} alt="Antes" />
      </OverlayImageWrapper>

      <LabelsRow>
        <Label side="left" src={befI}/>
        <Label side="right" src={afterI}/>
      </LabelsRow>
    </ImageContainer>

    <Content>
      <Title>{title}</Title>
      <Footer>
        <FooterIcon src={clock}/>
        <FooterText>{timeText}</FooterText>
      </Footer>
    </Content>
  </Card>
  );
};

export default BeforeAfterCard;
