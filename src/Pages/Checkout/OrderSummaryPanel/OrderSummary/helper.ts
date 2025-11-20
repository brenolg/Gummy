import type { CartItem } from "@/context/coreDataContext";

  function isCepSul(cep: string) {
    if (!cep) return false;

    const numericCep = cep.replace(/\D/g, "");
    
    if (numericCep.length < 1) return false;

    const firstDigit = numericCep[0];

    return firstDigit === "8" || firstDigit === "9";
  }

  function handleNumberOfBoxes(cart: CartItem[]) {
    let totalCaixas = 0;

    cart.forEach(item => {
      if (item.productId === "powergum-kit-3") {
        // 1 caixa por unidade
        totalCaixas += item.quantity;
      }

      if (item.productId === "powergum-1") {
        // 3 unidades por caixa
        totalCaixas += Math.ceil(item.quantity / 3);
      }
    });

    return totalCaixas;
  }

  function handleProductWeight(cart: CartItem[]) {
  let totalWeight = 0;

  cart.forEach(item => {
    // peso total do item = peso unitário * quantidade
    totalWeight += (item.peso || 0) * (item.quantity || 0);
  });

  return totalWeight;
}


export {handleNumberOfBoxes, handleProductWeight, isCepSul}