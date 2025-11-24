import * as yup from "yup";

// Todas as bandeiras exigem 13–19 dígitos (regra genérica + máscara remove ponto e espaço)
const cardNumberRegex = /^[0-9]{13,19}$/;

// MM/AA — MM entre 01 e 12
const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;

// CVV — 3 ou 4 dígitos
const cvvRegex = /^[0-9]{3,4}$/;

// CPF — 11 dígitos (com máscara)
const cpfRegex = /^[0-9]{11}$/;

export const schema = yup.object({
  cardNumber: yup
    .string()
    .required("Campo obrigatório, Digite o número do cartão.")
    .test(
      "cartao-valido",
      "Número do cartão inválido.",
      (value) => {
        if (!value) return false;
        const digits = value.replace(/\D/g, "");
        return cardNumberRegex.test(digits);
      }
    ),

  expiry: yup
    .string()
    .required("Informe a validade.")
    .matches(expiryRegex, "Data de validade inválida.")
    .test(
      "validade-futura",
      "Este cartão já está vencido.",
      (value) => {
        if (!value) return false;
        const [mm, yy] = value.split("/").map(Number);

        const expiryDate = new Date(2000 + yy, mm); // mês já vem 1–12
        const now = new Date();
        now.setDate(1);

        return expiryDate >= now;
      }
    ),

  cvv: yup
    .string()
    .required("Informe o CVV.")
    .matches(cvvRegex, "CVV inválido."),

  holderName: yup
    .string()
    .required("Digite o nome como está no cartão.")
    .matches(/^[A-Za-zÀ-ÿ\s]+$/, "Use apenas letras.")
    .test(
      "nome-composto",
      "Digite o nome completo.",
      (value) => {
        if (!value) return false;
        return value.trim().split(" ").length >= 2;
      }
    ),

  installments: yup
    .number()
    .required("Selecione o número de parcelas.")
    .min(1, "Selecione o número de parcelas.")
    .max(12),

  cpf: yup
    .string()
    .required("Informe seu CPF.")
    .test(
      "cpf-valido",
      "CPF inválido.",
      (value) => {
        if (!value) return false;
        const digits = value.replace(/\D/g, "");
        return cpfRegex.test(digits);
      }
    ),
});