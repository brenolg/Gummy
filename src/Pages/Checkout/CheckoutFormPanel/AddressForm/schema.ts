import * as yup from 'yup';

export const schema = yup.object({
  postalCode: yup.string().required('Campo obrigatório, Informe o CEP').transform((value) => value.replace(/\D/g, '')) // remove tudo que não é dígito
  .length(8, 'Digite um CEP válido.'),
  address: yup.string().required('Campo obrigatório, informe o nome da rua ou avenida.'),
  district: yup.string().required('Campo obrigatório, informe o bairro.'),
  addressComplement: yup.string(),
  addressNumber: yup
  .string()
  .required('Campo obrigatório, informe o número do endereço.')
  .test(
    'numero-ou-sn',
    "Se o local não tem número, digite 'S/N'.",
    (value) => {
      if (!value) return false;

      const trimmed = value.trim();

      // aceita "S/N" em qualquer capitalização
      if (/^s\/n$/i.test(trimmed)) return true;

      // aceita apenas números (1 ou mais dígitos)
      return /^[0-9]+$/.test(trimmed);
    }
  ),
  city: yup.string().required('Campo obrigatório, Informe a Cidade'),
  state: yup.string().required('Campo obrigatório, Informe o Estado')
});

