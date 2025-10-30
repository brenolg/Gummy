import * as yup from 'yup';

/** CEP Brasil: 00000-000 ou 00000000 */
const cepRegex = /^\d{5}-?\d{3}$/;
/** UF Brasil: 2 letras (ex.: MG, SP) */
const ufRegex = /^[A-Za-z]{2}$/;

export const addresSchema = yup
  .object({
    zipCode: yup
      .string()
      .required('CEP é obrigatório')
      .matches(cepRegex, 'CEP inválido (ex.: 30123-456)'),

    address: yup
      .string()
      .required('Endereço é obrigatório')
      .min(3, 'Endereço muito curto'),

    district: yup
      .string()
      .required('Bairro é obrigatório')
      .min(2, 'Bairro muito curto'),

    complement: yup
      .string()
      .optional()
      .default(''),

    number: yup
      .string()
      .required('Número é obrigatório')
      .matches(/^\d+[A-Za-z0-9-]*$/, 'Use somente números e sufixos válidos'),

    city: yup
      .string()
      .required('Cidade é obrigatória')
      .min(2, 'Cidade muito curta'),

    state: yup
      .string()
      .required('Estado (UF) é obrigatório')
      .matches(ufRegex, 'UF inválida (ex.: MG, SP)')
      .transform((v) => (v ? v.toUpperCase() : v)),
  })
  .required();

export type AddressFormData = yup.InferType<typeof addresSchema>;
