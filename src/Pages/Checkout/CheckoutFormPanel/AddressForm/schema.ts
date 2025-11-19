import * as yup from 'yup';

export const schema = yup.object({
  postalCode: yup.string().required('CEP é obrigatório'),
  address: yup.string().required('Endereço é obrigatório'),
  district: yup.string().required('Bairro é obrigatório'),
  addressComplement: yup.string().required('Comple'),
  addressNumber: yup.string().required('Número é obrigatório'),
  city: yup.string().required('Cidade é obrigatória'),
  state: yup.string().required('UF é obrigatória'),
});

