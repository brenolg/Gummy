import * as yup from 'yup';

export const schema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().required('E-mail é obrigatório'),
  phone: yup.string().required('Celular é obrigatório'),
  advertisement: yup.boolean(),
});

