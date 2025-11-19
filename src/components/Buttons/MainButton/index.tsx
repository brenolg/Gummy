import React from "react";
import { StyledMainButton, Spinner, Label } from "./styles";

type MainButtonProps = {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: React.ReactNode; // texto/label
  loading?: boolean;
  disabled?: boolean;
  maxW?: number; 
};

export default function MainButton({
  type = "button",
  onClick,
  children,
  loading = false,
  disabled = false,
  maxW, 
}: MainButtonProps) {
  const isdisabled = disabled || loading;

  return (
    <StyledMainButton
      type={type}
      onClick={onClick}
      disabled={isdisabled}
      $maxW={maxW} 
      aria-busy={loading}
      aria-live="polite"
      aria-disabled={isdisabled}
    >
      <Label $hidden={loading}>{children}</Label>
      {loading && <div className="loading-container"><Spinner aria-hidden="true" /></div>}
    </StyledMainButton>
  );
}
