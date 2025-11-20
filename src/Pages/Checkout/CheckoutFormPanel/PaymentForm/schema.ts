import * as yup from 'yup';

export const schema = yup.object({
  cardNumber: yup.string().required(),
  expiry: yup.string().required(),
  cvv: yup.string().required(),
  holderName: yup.string().required(),
  installments: yup.number().min(1).max(12).required(),
  cpf: yup.string().required(),
});
