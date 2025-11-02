import { Wrapper, Icon , Label } from "./styles";
import shield from '@/assets/icons/shield.svg'

export default function Secure() {
  return (
    <Wrapper>
      <Icon src={shield}/>
      <Label>Pagamento 100% Seguro</Label>
    </Wrapper>
  );
}
