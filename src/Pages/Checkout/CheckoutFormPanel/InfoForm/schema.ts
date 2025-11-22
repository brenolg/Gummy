import * as yup from 'yup';

const validDDDs = [
  '11','12','13','14','15','16','17','18','19',
  '21','22','24','27','28',
  '31','32','33','34','35','37','38',
  '41','42','43','44','45','46','47','48','49',
  '51','53','54','55',
  '61','62','64','63','65','66','67','68','69',
  '71','73','74','75','77','79',
  '81','82','83','84','85','88','86','89',
  '91','92','93','94','95','96','97','98','99'
];

export const schema = yup.object({
  name: yup
    .string()
    .required('Campo obrigatório, preencha seu nome completo.')
    .test(
      'apenas-letras',
      'Use apenas letras no nome.',
      value => {
        if (!value) return false;
        return /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(value.trim());
      }
    )
    .test(
      'nome-composto',
      'Digite seu nome completo.',
      (value) => {
        if (!value) return false;

        // Quebra por espaços e remove elementos vazios
        const parts = value.trim().split(/\s+/);

        // Deve ter pelo menos 2 palavras com 2+ letras
        return parts.length >= 2 && parts.every(p => p.length >= 2);
      }
    ),
  email: yup.string().required('Campo obrigatório, informe seu email.').email('Informe um email válido.'),
  phone: yup
  .string()
  .required('Campo obrigatório, informe seu número de celular.')
  // 1) verifica se está completo (11 dígitos). Esta mensagem tem prioridade.
  .test(
    'telefone-completo',
    'O número está incompleto. Verifique e tente novamente.',
    (value) => {
      if (!value) return false;
      const digits = value.replace(/\D/g, '');
      return digits.length === 11;
    }
  )
  // 2) só se o anterior passou (11 dígitos), valida o DDD e mostra outra mensagem
  .test(
    'ddd-valido',
    'Digite um número válido com DDD.',
    (value) => {
      if (!value) return false;
      const digits = value.replace(/\D/g, '');
      if (digits.length !== 11) return false; // segurança extra
      const ddd = digits.slice(0, 2);
      return validDDDs.includes(ddd);
    }
  ),
  advertisement: yup.boolean(),
});

