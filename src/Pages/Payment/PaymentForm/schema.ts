import * as yup from 'yup';

/** Luhn check (cartão) */
function luhnCheck(num: string) {
  const digits = num.replace(/\s+/g, '');
  let sum = 0;
  let shouldDouble = false;

  for (let i = digits.length - 1; i >= 0; i--) {
    let d = parseInt(digits[i], 10);
    if (shouldDouble) {
      d *= 2;
      if (d > 9) d -= 9;
    }
    sum += d;
    shouldDouble = !shouldDouble;
  }
  return sum % 10 === 0;
}

/** Validade MM/AA futura */
function isValidExpiry(value: string) {
  if (!/^\d{2}\/\d{2}$/.test(value)) return false;
  const [mmStr, yyStr] = value.split('/');
  const mm = Number(mmStr);
  const yy = Number(yyStr);

  if (mm < 1 || mm > 12) return false;

  // Ajuste de século simples: 20yy
  const year = 2000 + yy;

  const now = new Date();
  const exp = new Date(year, mm, 0, 23, 59, 59); // último dia do mês

  // validade deve ser >= mês atual
  return exp >= new Date(now.getFullYear(), now.getMonth(), 1);
}

export const cardSchema = yup.object({
  cardNumber: yup
    .string()
    .required('Número do cartão é obrigatório')
    .transform(v => (v ? v.replace(/\s+/g, '') : v))
    .matches(/^\d{13,19}$/, 'Número do cartão inválido')
    .test('luhn', 'Número do cartão inválido', v => (v ? luhnCheck(v) : false)),

  expiry: yup
    .string()
    .required('Validade é obrigatória')
    .test('mm-yy', 'Use o formato MM/AA', v => (!!v && /^\d{2}\/\d{2}$/.test(v)))
    .test('future', 'Cartão vencido', v => (!!v && isValidExpiry(v))),

  cvv: yup
    .string()
    .required('CVV é obrigatório')
    .matches(/^\d{3,4}$/, 'CVV inválido'),

  holderName: yup
    .string()
    .required('Nome do titular é obrigatório')
    .min(3, 'Nome muito curto'),

  installments: yup
    .number()
    .typeError('Selecione as parcelas')
    .required('Selecione as parcelas')
    .min(1)
    .max(12),
}).required();

export type CardFormData = yup.InferType<typeof cardSchema>;
