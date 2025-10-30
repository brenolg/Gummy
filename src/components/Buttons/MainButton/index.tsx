import React from "react";
import { StyledMainButton, Spinner, Label } from "./styles";

type MainButtonProps = {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: React.ReactNode; // texto/label
  loading?: boolean;
  disabled?: boolean;
};

export default function MainButton({
  type = "button",
  onClick,
  children,
  loading = false,
  disabled = false,

}: MainButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <StyledMainButton
      type={type}
      onClick={onClick}
      disabled={isDisabled}

      aria-busy={loading}
      aria-live="polite"
      aria-disabled={isDisabled}
    >
      {loading && <Spinner aria-hidden="true" />}
      <Label $hidden={loading}>{children}</Label>
    </StyledMainButton>
  );
}
