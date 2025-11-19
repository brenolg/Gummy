import React, { useState } from 'react'
import { Controller, useFormContext, useWatch } from 'react-hook-form'
import { Placeholder, InputError, InputContainer } from '../FormCommomStyle'
import { Input } from './styles'
import { getMaskConfig } from './getMaskConfig'

interface InputFieldProps {
  name: string
  type: string
  disabled?: boolean
  placeholder: string
  hasAsterisk?: boolean
  onBlur?: () => void
  maxLength?: number
  loading?: boolean
  rightIcon?: string
  mb?: number
}

const InputComponent: React.FC<InputFieldProps> = ({
  name,
  disabled,
  placeholder,
  hasAsterisk,
  onBlur,
  maxLength,
  type,
  rightIcon,
  mb,
}) => {
  const { control, clearErrors } = useFormContext()

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
    <InputContainer $mb={mb}>
      <div className="relative" style={{ position: 'relative' }}>
        {/* label flutuante */}
        <Placeholder $isFocusedOrValid={isFocusedOrValid} $isDisabled={disabled}>
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
                  onFocus={() => {
                    setInputFocused(true);
                    clearErrors(name)
                  }}
                  onBlur={() => {
                    field.onBlur()
                    handleBlur()
                  }}
                  $disabled={disabled}
                  disabled={disabled}
                  $error={!!fieldError}
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
                >
                  {fieldError}
                </InputError>
              </>
            )
          }}
        />
      </div>
    </InputContainer>
  )
}

export default InputComponent
