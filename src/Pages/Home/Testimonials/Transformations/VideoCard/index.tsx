import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import play from "@/assets/icons/play.svg"

type Props = {
  videoUrl: string;
  text: string;
};

export default function VideoCard({ videoUrl, text }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showThumb, setShowThumb] = useState(true);

  const handleClick = () => {
    if (!videoRef.current) return;

    const video = videoRef.current;

    // se estiver pausado ou terminou → dar play
    if (video.paused || video.ended) {
      video.muted = true;
      void video.play();
      setShowThumb(false); // some o thumb
    } else {
      // se estiver tocando → pausar e voltar o thumb
      video.pause();
      video.currentTime = 0; // opcional: voltar para o início
      setShowThumb(true);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setShowThumb(true);
      video.currentTime = 0;
    };

    video.addEventListener("ended", handleEnded);
    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <Card onClick={handleClick}>
      <Video
        ref={videoRef}
        src={videoUrl}
        preload="metadata"
        playsInline
      />

      {showThumb && (
        <>
          <Overlay />
          <PlayButton>
            <PlayTriangle  src={play}/>
          </PlayButton>
          <Text>“{text}”</Text>
        </>
      )}
    </Card>
  );
}

/* ---------------- styles ---------------- */

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Card = styled.div`
  width: 258.797px;
  height: 460px;
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 39.892px;
  height: 39.892px;
`;

const PlayTriangle = styled.img`

`;

const Text = styled.p`
  position: absolute;
  bottom: 20px;
  left: 24.1px;
  width: 210px;
  text-align: center;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  background: linear-gradient(90deg, #fdfbfe 0%, #b2872e 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;
