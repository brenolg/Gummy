import React from 'react'
import { useController, useFormContext } from 'react-hook-form'
import {
  Wrapper,
  Label,
  HiddenInput,
  Box,
  Text,
} from './styles'
import { InputError } from '../FormCommomStyle'

type CheckboxFieldProps = {
  name: string
  label: string
  disabled?: boolean
}

const Checkbox: React.FC<CheckboxFieldProps> = ({
  name,
  label,
  disabled = false,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  const {
    field: { value, onChange, ref },
  } = useController({
    name,
    control,
    defaultValue: false,
  })

  const error = errors[name]?.message as string | undefined

  return (
    <Wrapper>
      <Label $disabled={disabled}>
        {/* input real, acessível mas escondido visualmente */}
        <HiddenInput
          ref={ref}
          type="checkbox"
          checked={!!value}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error? `${name}-error` : undefined}
          onChange={(e) => {
            onChange(e.target.checked)
          }}
        />

        {/* caixinha visual customizada */}
        <Box
          $checked={!!value}
          $error={!!error}
          $disabled={disabled}
          aria-hidden="true"
        >
          {!!value && (
            <svg
              viewBox="0 0 24 24"
              width={14}
              height={14}
            >
              <polyline
                points="20 6 9 17 4 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </Box>

        {/* texto ao lado */}
        <Text>{label}</Text>
      </Label>

      {/* mensagem de erro do yup */}
      <InputError
        $error={!!error}
        $disabled={disabled}
      >
        {error}
      </InputError>
    </Wrapper>
  )
}

export default Checkbox
