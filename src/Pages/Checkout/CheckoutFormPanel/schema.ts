import * as yup from 'yup';

// schemaStep1.ts
export const schemaStep1 = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().required('E-mail é obrigatório'),
  cell: yup.string().required('Celular é obrigatório'),
  advertisement: yup.boolean(),
});

// schemaStep2.ts
export const schemaStep2 = yup.object({
  zipCode: yup.string().required('CEP é obrigatório'),
  address: yup.string().required('Endereço é obrigatório'),
  district: yup.string().required('Bairro é obrigatório'),
  complement: yup.string(),
  number: yup.string().required('Número é obrigatório'),
  city: yup.string().required('Cidade é obrigatória'),
  state: yup.string().required('UF é obrigatória'),
});

// schemaStep3.ts
export const schemaStep3 = yup.object({
  cardNumber: yup.string().required(),
  expiry: yup.string().required(),
  cvv: yup.string().required(),
  holderName: yup.string().required(),
  installments: yup.number().min(1).max(12).required(),
});

// schemaFull.ts
export const schemaFull = schemaStep1.concat(schemaStep2).concat(schemaStep3);