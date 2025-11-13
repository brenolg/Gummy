import { useCoreData } from "@/context/coreDataContext";
import { useState } from "react";
import cartIcon from "@/assets/icons/cart.svg";
import { useNavigate } from "react-router-dom";
import { CartButton, Close, Drawer, EBookContainer, EmptyContainer, Footer, Header, ImageContainer, Item, Items, Overlay, ShippingContainer } from "./styles";
import { MainButton } from "@/components";
import closeIcon from '@/assets/icons/closeIcon.svg'
import truck from '@/assets/icons/truck.svg'
import { QuantitySelector } from "./QuantitySelector";
import eBookImg from '@/assets/imgs/EBook.png'
import { useFadeTransition } from "./useFadeTransition";
import emptyBag from '@/assets/icons/emptyBag.svg'

export default function CartDrawer() {
  const { cart } = useCoreData();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  function toggleDrawer() {
    setOpen(!open);
  }

  const total = cart.reduce(
    (acc, item) => acc + item.unitPrice * item.quantity,
    0
  );
  const cartCount = cart.reduce(
    (acc, item) => acc + (item.quantity || 0),
    0
  );

  function goToCheckout() {
    if (cartCount > 0) {
    navigate("/checkout");
    }
  }

  function handleDescriptionnTxt(id: string) {
    if( id === 'powergum-1') return 'Power Gummy® - 30 gomas de 3,8g sabor frutas vermelhas'
    return 'Kit 3 Power Gummy® - 90 gomas de ...g sabor frutas vermelhas'
  }

  const hasKit3MoreThanOne = cart.some(
    item => item.productId === "powergum-kit-3" && item.quantity > 0
  );
  const shouldRenderEbook = useFadeTransition(hasKit3MoreThanOne, 350);

  return (
    <>
      <CartButton onClick={toggleDrawer}>
        <img src={cartIcon} alt="carrinho" />
        <span>({cartCount})</span>
      </CartButton>

      {/* ==== Overlay ==== */}
      {open && <Overlay onClick={toggleDrawer} />}

      {/* ==== Drawer ==== */}
      <Drawer $open={open}>
        <Header>
          {cartCount > 0 ? <p>Carrinho <span>- {cartCount} itens</span></p> : <p>Carrinho</p> }
          <Close onClick={toggleDrawer}>
            <img src={closeIcon}/>
          </Close>
        </Header>

        {cartCount > 0 ? 
          <> 
          <ShippingContainer>
            <img src={ truck }/>
            <p>
              <span>Frete Grátis</span> para todo <span>Sul do Brasil</span> a partir de <span>R$ 199</span>
            </p>
          </ShippingContainer>

          <Items>
            {cart.map((item) => (
              <Item key={item.productId}>
                <ImageContainer $img={item.image}/>

                <div className="info">
                  <p className="title">{handleDescriptionnTxt(item.productId)}</p>

                  <div className="price-container">
                    <p className="price">R$ {item.unitPrice.toFixed(2)}</p>

                    <QuantitySelector productId={item.productId}/>
                  </div>
                  
                </div>
              </Item>
            ))}
          </Items>

          {shouldRenderEbook && (
            <EBookContainer $visible={hasKit3MoreThanOne}>
              <img className="eBookImg" src={eBookImg} />
              <div>
                <p className="strong">Brinde desbloqueado!</p>
                <p className="light">E-book exclusivo Power Gummy®</p>
              </div>
            </EBookContainer>
          )}

          <Footer>
            <div className="totalContainer">
              <span className="total">Total:</span>
              <strong>R$ {total.toFixed(2)}</strong>
            </div>
            <MainButton type="button" onClick={goToCheckout}>Finalizar Compra</MainButton>
          </Footer>
        </>
        : 
        <EmptyContainer>
          <img src={emptyBag}/>
          <p className="text"> Seu carrinho está vazio.</p>
        </EmptyContainer> }
      </Drawer>
    </>
  );
}
