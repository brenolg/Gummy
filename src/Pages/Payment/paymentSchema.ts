import * as yup from 'yup'

export const paymentSchema = yup.object({
  nome: yup
    .string()
    .required('Nome obrigatório')
    .min(3, 'Nome muito curto'),
  
  parcelas: yup
    .string()
    .required('Selecione uma opção de parcelamento'),


  acceptTerms: yup
    .boolean()
    .oneOf([true], 'Você precisa aceitar os termos de uso')
    .required('Obrigatório'),
})
