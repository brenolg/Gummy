import React from 'react'
import { StyledMainButton, Label } from './styles'
import LoadingBtn from '@/components/LoadingBtn'

type MainButtonProps = {
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  children: React.ReactNode // texto/label
  loading?: boolean
  disabled?: boolean
  maxW?: number
  golden?: boolean
  font?: number
}

export default function MainButton({
  type = 'button',
  onClick,
  children,
  loading = false,
  disabled = false,
  maxW,
  golden = false,
  font = 18,
}: MainButtonProps) {
  const isdisabled = disabled || loading

  return (
    <StyledMainButton
      type={type}
      onClick={onClick}
      disabled={isdisabled}
      $maxW={maxW}
      aria-busy={loading}
      aria-live="polite"
      aria-disabled={isdisabled}
      $golden={golden}
      $font={font}
    >
      <Label $hidden={loading}>{children}</Label>
      {loading && (
        <div className="loading-container">
          <LoadingBtn />
        </div>
      )}
    </StyledMainButton>
  )
}
