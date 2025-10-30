import * as yup from 'yup'

export const InfoSchema = yup.object({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  cell: yup.string().required('Celular obrigatório'),
  advertisement: yup.boolean().default(false),
})
