import { useCoreData, type FormStep } from "@/context/coreDataContext.tsx";
import { StepCircle, StepDivider, StepItem, StepLabel, StepperWrapper } from "./styles.ts";
import check from './check.svg'

const toIndex = (s: FormStep): 0 | 1 | 2 | 3 => (typeof s === "number" ? s : 3);

export default function CheckoutStepper() {
  const { formStep } = useCoreData();
  const idx = toIndex(formStep); // 0..3

  return (
    <StepperWrapper>
      {/* Step 0 - Informações */}
      <StepItem $active={idx >= 0} role="button" tabIndex={0}>
        <StepCircle $active={idx >= 0}>{idx > 0 ? <img src={check}/> : "1"}</StepCircle>
        <StepLabel $active={idx === 0}>Informações</StepLabel>
      </StepItem>

      <StepDivider $active={idx > 0} />

      {/* Step 1 - Endereço */}
      <StepItem $active={idx >= 1}  role="button" tabIndex={0}>
        <StepCircle $active={idx >= 1}>{idx > 1 ? <img src={check}/> : "2"}</StepCircle>
        <StepLabel $active={idx === 1}>Endereço</StepLabel>
      </StepItem>

      <StepDivider $active={idx > 1} />

      {/* Step 2 - Pagamento */}
      <StepItem $active={idx >= 2} role="button" tabIndex={0}>
        <StepCircle $active={idx >= 2}>{idx > 2 ? <img src={check}/> : "3"}</StepCircle>
        <StepLabel $active={idx === 2}>Pagamento</StepLabel>
      </StepItem>
    </StepperWrapper>
  );
}
