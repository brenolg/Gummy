import React, { useState } from 'react'
import { Controller, useFormContext, useWatch } from 'react-hook-form'
import { Placeholder, InputError } from '../FormCommomStyle'
import { Input } from './styles'
import { getMaskConfig } from './getMaskConfig'

interface InputFieldProps {
  name: string
  type: string
  disabled?: boolean
  dataTestId: string
  placeholder: string
  hasAsterisk?: boolean
  onBlur?: () => void
  maxLength?: number
  loading?: boolean
  rightIcon?: string
}

const InputComponent: React.FC<InputFieldProps> = ({
  name,
  disabled,
  dataTestId,
  placeholder,
  hasAsterisk,
  onBlur,
  maxLength,
  type,
  rightIcon,
}) => {
  const { control } = useFormContext()

  const [inputFocused, setInputFocused] = useState(false)
  const inputValue = useWatch({ control, name })

  const isFocusedOrValid = inputFocused || !!inputValue || inputValue === 0

  const handleBlur = () => {
    setInputFocused(false)
    if (onBlur) {
      onBlur()
    }
  }

  const { mask, blocks, unmask } = getMaskConfig(type)

  return (
    <div style={{ width: '100%' }}>
      <div className="relative" style={{ position: 'relative' }}>
        {/* label flutuante */}
        <Placeholder $isFocusedOrValid={isFocusedOrValid} isDisabled={disabled}>
          {placeholder}
          {hasAsterisk && <span className="asterisk"> * </span>}
        </Placeholder>

        {/* campo controlado */}
        <Controller
          name={name}
          control={control}
          defaultValue=""
          render={({ field, fieldState }) => {
            const fieldError = fieldState.error?.message

            return (
              <>
                <Input
                  {...field}
                  onAccept={(value: string | number) => field.onChange(value)}
                  mask={mask}
                  blocks={blocks}
                  unmask={unmask}
                  id={name}
                  value={field.value ?? ''}
                  onFocus={() => setInputFocused(true)}
                  onBlur={() => {
                    field.onBlur()
                    handleBlur()
                  }}
                  $disabled={disabled}
                  $error={!!fieldError}
                  data-testid={dataTestId}
                  maxLength={maxLength}
                />

                {rightIcon && (
                  <img
                    src={rightIcon}
                    alt="input icon"
                    className="input-icon right-icon"
                  />
                )}

                {/* mensagem de erro do yup */}
                <InputError
                  $error={!!fieldError}
                  $disabled={disabled}
                  data-testid={`${dataTestId}-error`}
                >
                  {fieldError}
                </InputError>
              </>
            )
          }}
        />
      </div>
    </div>
  )
}

export default InputComponent
