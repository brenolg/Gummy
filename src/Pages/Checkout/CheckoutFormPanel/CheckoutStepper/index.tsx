import { StepCircle, StepDivider, StepItem, StepLabel, StepperWrapper } from "./styles.ts";

type StepperProps = {
  step: number; // 0, 1, 2
};

export default function CheckoutStepper({ step }: StepperProps) {
  return (
    <StepperWrapper>
      <StepItem $active={step >= 0}>
        <StepCircle $active={step === 0 || step > 0}>
          {step >= 0 ? "✔" : "1"}
        </StepCircle>
        <StepLabel $active={step === 0}>Informações</StepLabel>
      </StepItem>

      <StepDivider $active={step > 0} />

      <StepItem $active={step >= 1}>
        <StepCircle $active={step === 1 || step > 1}>{step > 1 ? "✔" : "2"}</StepCircle>
        <StepLabel $active={step === 1}>Endereço</StepLabel>
      </StepItem>

      <StepDivider $active={step > 1} />

      <StepItem $active={step >= 2}>
        <StepCircle $active={step >=  2}>{step > 2 ? "✔" : "3"}</StepCircle>
        <StepLabel $active={step >= 2}>Pagamento</StepLabel>
      </StepItem>
    </StepperWrapper>
  );
}
