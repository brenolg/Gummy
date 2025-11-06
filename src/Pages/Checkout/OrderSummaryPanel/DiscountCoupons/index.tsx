import React, { useState, useEffect } from "react";
import { Wrapper, Row, Input, ApplyButton, Chips, Chip, Icon, RemoveButton } from "./styles";
import couponIcon from "@/assets/icons/couponIcon.svg";
import xGolden from "@/assets/icons/xGolden.svg";
import { useCoreData } from "@/context/coreDataContext";

type Coupon = {
  code: string;
  discount: number; // % de desconto
};

interface DiscountCouponsProps {
  onChange?: (coupons: Coupon[]) => void;
}

export const DiscountCoupons: React.FC<DiscountCouponsProps> = ({ onChange }) => {
  const { paymentMethod , coupons, setCoupons } = useCoreData(); 
  const [code, setCode] = useState("");

  const PIX_COUPON: Coupon = { code: "PIX05", discount: 5 };

  // ✅ Adiciona/remover cupom PIX automaticamente
  useEffect(() => {
    if (paymentMethod === "PIX") {
      const exists = coupons.some((c) => c.code === PIX_COUPON.code);
      if (!exists) {
        const updated = [...coupons, PIX_COUPON];
        setCoupons(updated);
        onChange?.(updated);
      }
    } else {
      const updated = coupons.filter((c) => c.code !== PIX_COUPON.code);
      if (updated.length !== coupons.length) {
        setCoupons(updated);
        onChange?.(updated);
      }
    }
  }, [paymentMethod]);

  function handleApply() {
    if (!code.trim()) return;
    const normalized = code.trim().toUpperCase();

    // evita duplicados
    if (coupons.some((c) => c.code === normalized)) {
      setCode("");
      return;
    }

    const newCoupon: Coupon = { code: normalized, discount: 5 }; // 👈 ex: cupons manuais dão 5%
    const updated = [...coupons, newCoupon];

    setCoupons(updated);
    setCode("");
    onChange?.(updated);
  }

  function handleRemove(code: string) {
    //Impede a deleção do cupom pix
    if (code === "PIX10") return;
    const updated = coupons.filter((c) => c.code !== code);
    setCoupons(updated);
    onChange?.(updated);
  }

  return (
    <Wrapper>
      <Row>
        <Input
          placeholder="Código de desconto"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleApply())}
        />

        <ApplyButton disabled={!code.trim()} onClick={handleApply}>
          Aplicar
        </ApplyButton>
      </Row>

      {coupons.length > 0 && (
        <Chips>
          {coupons.map((c) => (
            <Chip key={c.code}>
              <Icon src={couponIcon} />
              <span>{c.code}</span>
              <RemoveButton onClick={() => handleRemove(c.code)}>
                <img src={xGolden} />
              </RemoveButton>
            </Chip>
          ))}
        </Chips>
      )}
    </Wrapper>
  );
};
