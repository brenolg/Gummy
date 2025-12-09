// FakeInput.tsx
import type { FC } from 'react'
import { StyledInput, StyledMaskInput } from './styles'

type MaskType = 'cpf' | 'cnpj' | 'phone' | 'cep' | 'number' | 'text'

interface FakeInputProps {
  value: string
  onChange: (value: string) => void
  type?: MaskType
  name?: string
  placeholder?: string
  disabled?: boolean
}

const getMaskByType = (type?: MaskType) => {
  switch (type) {
    case 'cpf':
      return { mask: '000.000.000-00' }
    case 'cnpj':
      return { mask: '00.000.000/0000-00' }
    case 'phone':
      return { mask: '(00) 00000-0000' }
    case 'cep':
      return { mask: '00000-000' }
    case 'number':
      return {
        mask: Number,
        scale: 2,
        thousandsSeparator: '.',
        radix: ',',
      }
    default:
      return null
  }
}

export const FakeInput: FC<FakeInputProps> = ({
  value,
  onChange,
  type = 'text',
  name,
  placeholder,
  disabled,
}) => {
  const maskConfig = getMaskByType(type)

  if (!maskConfig) {
    return (
      <StyledInput
        value={value}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
      />
    )
  }

  return (
    <StyledMaskInput
      {...maskConfig}
      value={value}
      name={name}
      placeholder={placeholder}
      disabled={disabled}
      overwrite
      onAccept={(value) => onChange(String(value))}
    />
  )
}
