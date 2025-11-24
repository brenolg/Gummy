import {
  Wrapper,
  LeftBox,
  Title,
  List,
  VideoBox,
  BearImage,
} from "./styles";

import bear from "./bear.svg";
import { MainButton } from "@/components";

export default function HowToUse() {
  return (
    <Wrapper id='use'>
      <LeftBox>
        <Title>COMO USAR</Title>

        <List>
          <li>Para levar em qualquer lugar</li>
          <li>Prático e gostoso</li>
          <li>Auto cuidado com sabor</li>
          <li>Ideal para o life style moderno</li>
        </List>

        <MainButton maxW={350}>Quero minha Power Gummy</MainButton>
  
        <BearImage src={bear} alt="gummy" />
      </LeftBox>

      <VideoBox>
        <video src="/videos/tutorial.mp4" controls />
      </VideoBox>
    </Wrapper>
  );
}
