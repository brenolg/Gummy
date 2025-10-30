import * as yup from 'yup';

export const checkoutSchema = yup.object({
  // PASSO 1 — Info
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  cell: yup.string().required('Celular é obrigatório'),
  advertisement: yup.boolean().default(false),

  // PASSO 2 — Endereço
  zipCode: yup.string().required('CEP é obrigatório'),
  address: yup.string().required('Endereço é obrigatório'),
  district: yup.string().required('Bairro é obrigatório'),
  complement: yup.string().default(''),
  number: yup.string().required('Número é obrigatório'),
  city: yup.string().required('Cidade é obrigatória'),
  state: yup.string().required('UF é obrigatória'),

  // PASSO 3 — Cartão
  cardNumber: yup.string().required('Número do cartão é obrigatório'),
  expiry: yup.string().required('Validade é obrigatória'),
  cvv: yup.string().required('CVV é obrigatório'),
  holderName: yup.string().required('Nome do titular é obrigatório'),
  installments: yup.number().required().min(1).max(12),
}).required();

export type CheckoutFormData = yup.InferType<typeof checkoutSchema>;
