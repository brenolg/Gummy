export const fmtBRL = (n: number) =>
    n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export function onlyDigits(value?: string | null): string {
    if (!value) return "";
    return value.replace(/\D/g, "");
}