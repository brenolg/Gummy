import React, { useState, useRef, useEffect } from 'react'
import { useController, useFormContext } from 'react-hook-form'
import {
  Placeholder,
  InputError,
  InputContainer,
} from '../FormCommomStyle/index'
import { SelectWrapper, SelectDisplay, Dropdown, DropdownItem } from './styles'

interface Option {
  label: string
  value: string | number
}
interface SelectComponentProps {
  name: string
  placeholder: string
  disabled?: boolean
  options: Option[]
  hasAsterisk?: boolean
  isSearchable?: boolean
  onBlur?: () => void
  customWith?: number
  small?: boolean
  large?: boolean
}

const CustomSelectComponent: React.FC<SelectComponentProps> = ({
  name,
  placeholder,
  disabled,
  options,
  hasAsterisk,
  onBlur,
  isSearchable,
}) => {
  const {
    formState: { errors },
    control,
  } = useFormContext()

  const {
    field: { onChange, value, ref },
  } = useController({ name, control })
  const [searchValue, setSearchValue] = useState('')
  const [open, setOpen] = useState(false)
  const [focused, setFocused] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [filteredOptions, setFilteredOptions] = useState(options)

  const error = errors[name]?.message as string | undefined
  const isFocusedOrValid = focused || !!value || value === 0

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
        if (onBlur) {
          onBlur()
        }
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [onBlur])

  const selectedLabel = options.find((opt) => opt.value === value)?.label
  useEffect(() => {
    setSearchValue(selectedLabel || '')
  }, [selectedLabel]) // Troca o valor do input toda vez que o valor do select mudar

  return (
    <InputContainer
      ref={dropdownRef}
      className="select"
    >
      <div className="relative">
        <Placeholder $isFocusedOrValid={isFocusedOrValid} isDisabled={disabled}>
          {placeholder}
          {hasAsterisk && <span className="asterisk"> * </span>}
        </Placeholder>

        <SelectWrapper>
          <SelectDisplay
            onClick={() => !disabled && setOpen((prev) => !prev)}
            tabIndex={0}
            ref={ref}
            error={error}
            onFocus={() => {
              if (!disabled) setFocused(true)
            }}
            onBlur={() => {
              setTimeout(() => {
                setSearchValue('')
                setFilteredOptions(options)
                setFocused(false)
              }, 100) //  necesario tempo para evitar q o placeholder abaixe antes q vire valids
            }}
            onChange={(e) => {
              if (!isSearchable) return
              setSearchValue(e.target.value)
              const filtered = options.filter((opt) =>
                opt.label.toLowerCase().includes(searchValue.toLowerCase())
              )
              setFilteredOptions(filtered)
            }}
            readOnly={!isSearchable}
            placeholder={selectedLabel}
            disabled={disabled}
            value={searchValue}
          />
   

          {open && (
            <Dropdown>
              {filteredOptions.map((opt) => (
                <DropdownItem
                  key={opt.value}
                  onClick={() => {
                    onChange(opt.value)
                    setOpen(false)
                  }}
                  $isSelected={value === opt.value}
                >
                  {opt.label}
                </DropdownItem>
              ))}
            </Dropdown>
          )}
        </SelectWrapper>

        <InputError
          $error={!!error}
          $disabled={disabled}
        >
          {error}
        </InputError>
      </div>
    </InputContainer>
  )
}

export default CustomSelectComponent