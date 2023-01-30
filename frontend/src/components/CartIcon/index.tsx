import { useContext, useState } from 'react';
import cartIcon from '../../assets/img/cart.svg';
import './styles.css';
import * as cartService from '../../services/cart-service';
import { ContextCartCount } from '../../utils/context-cart';

export default function CartIcon() {
  const { contextCartCount } = useContext(ContextCartCount);
  return (
    <>
      <img src={cartIcon} alt="Carrinho de compras" />
      {
        contextCartCount > 0 &&
        <div className="dsc-cart-cout">{contextCartCount}</div>
      }

    </>
  );
}