import { OrderDTO } from './../models/order';
import * as cartResposity from '../localStorage/cart-repository';

export function saveCart(cart: OrderDTO) {
  cartResposity.save(cart);
}

export function getCart() : OrderDTO {
  return cartResposity.get();
}