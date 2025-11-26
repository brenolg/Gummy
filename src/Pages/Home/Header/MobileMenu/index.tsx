import { useState } from "react";
import {
  HamburgerButton,
  HamburgerLines,
  MobileMenuPanel,
  MobileMenuWrapper,
} from "./styles";

import defaultScrollProps from "@/utils/defaultScrollProps";
import { NavItem } from "../styles";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

export default function MobileMenu() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(prev => !prev);
  const close = () => setOpen(false);

  function goToTrack() {
    navigate("/track");
    close();
  }

  return (
    <MobileMenuWrapper>
      <HamburgerButton onClick={toggle}>
        <HamburgerLines $open={open} />
      </HamburgerButton>

      <MobileMenuPanel $open={open}>
        <Link to="science" {...defaultScrollProps} onClick={close}>
          <NavItem>CABELO, PELE & UNHA</NavItem>
        </Link>

        <Link to="ingredients" {...defaultScrollProps} onClick={close}>
          <NavItem>FÓRMULA</NavItem>
        </Link>

        <Link to="beneficios" {...defaultScrollProps} onClick={close}>
          <NavItem>BENEFÍCIOS</NavItem>
        </Link>

        <Link to="use" {...defaultScrollProps} onClick={close}>
          <NavItem>COMO USAR</NavItem>
        </Link>

        <Link to="depoimentos" {...defaultScrollProps} onClick={close}>
          <NavItem>DEPOIMENTOS</NavItem>
        </Link>

        <button type="button" onClick={goToTrack}>
          <NavItem>RASTREAR PEDIDO</NavItem>
        </button>
      </MobileMenuPanel>
    </MobileMenuWrapper>
  );
}
