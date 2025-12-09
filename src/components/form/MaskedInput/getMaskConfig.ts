import IMask from 'imask'

const getCurrent18 = () => new Date().getFullYear() - 18

type BlocksConfig = Record<
  string,
  {
    mask?: typeof IMask.MaskedRange | NumberConstructor
    from?: number
    to?: number
    maxLength?: number
    scale?: number
    signed?: boolean
    radix?: string
    mapToRadix?: string[]
    thousandsSeparator?: string
    padFractionalZeros?: boolean
    normalizeZeros?: boolean
    min?: number
    max?: number
    suffix?: string
  }
>

export type MaskConfig = {
  mask?: string
  blocks?: BlocksConfig
  unmask: 'typed' | false
}

export const getMaskConfig = (tp: string): MaskConfig => {
  const input =
    {
      number: [
        'num',
        {
          num: {
            mask: Number,
            radix: ',',
            mapToRadix: [','],
            scale: 2,
            signed: false,
            thousandsSeparator: '.',
            padFractionalZeros: false,
            normalizeZeros: true,
            min: 0,
            max: Number.MAX_SAFE_INTEGER,
          },
        } as BlocksConfig,
      ],
      nospace: [
        /^[^\s]+$/, // regex que não permite espaços
      ],
      money: [
        'R$ num',
        {
          num: {
            mask: Number,
            radix: ',',
            mapToRadix: [','],
            scale: 2,
            signed: false,
            thousandsSeparator: '.',
            padFractionalZeros: true,
            normalizeZeros: true,
            min: 0,
            max: Number.MAX_SAFE_INTEGER,
          },
        } as BlocksConfig,
      ],
      numberCents: [
        'num',
        {
          num: {
            mask: Number,
            radix: ',',
            mapToRadix: [',', '.'], // ✅ aceita vírgula e ponto
            scale: 2, // ✅ permite centavos
            signed: false,
            thousandsSeparator: '.', // ✅ opcional
            padFractionalZeros: false,
            normalizeZeros: true,
            min: 0,
            max: Number.MAX_SAFE_INTEGER,
          },
        } as BlocksConfig,
      ],
      cpf: ['000.000.000-00'],
      rg: ['00.000.000-00'],
      cnpj: ['00.000.000/0000-00'],
      phone: ['(00) 00000-0000'],
      cep: ['00000-000'],
      date: [
        'd/m/Y',
        {
          d: { mask: IMask.MaskedRange, from: 1, to: 31, maxLength: 2 },
          m: { mask: IMask.MaskedRange, from: 1, to: 12, maxLength: 2 },
          Y: { mask: IMask.MaskedRange, from: 1900, to: 2200 },
        } as BlocksConfig,
      ],
      card: ['0000 0000 0000 0000'],
      expiry: ['00/00'],
      cvv: ['0000'],
      birthday: [
        'd/m/Y',
        {
          d: { mask: IMask.MaskedRange, from: 1, to: 31, maxLength: 2 },
          m: { mask: IMask.MaskedRange, from: 1, to: 12, maxLength: 2 },
          Y: { mask: IMask.MaskedRange, from: 1900, to: getCurrent18() },
        } as BlocksConfig,
      ],
      jurosaa: [
        'num',
        {
          num: {
            mask: Number,
            scale: 2,
            signed: false,
            radix: ',',
            mapToRadix: [','],
            min: 0,
            max: 100,
            normalizeZeros: true,
            padFractionalZeros: true,
            suffix: '% a.a.',
          },
        } as BlocksConfig,
      ],
    }[tp] || []

  const [mask, blocks] = input as [string | undefined, BlocksConfig | undefined]

  const unmask: 'typed' | false = ['number', 'money', 'jurosaa'].includes(tp) ? 'typed' : false

  return { mask, blocks, unmask }
}
