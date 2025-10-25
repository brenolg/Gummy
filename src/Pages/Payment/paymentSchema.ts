import * as yup from 'yup'

export const paymentSchema = yup.object({
  nome: yup
    .string()
    .required('Nome obrigatório')
    .min(3, 'Nome muito curto'),

})
