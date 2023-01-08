import { json } from 'react-router-dom';
import { OrderDTO } from './../models/order';

export function save(cart: OrderDTO) {
  const str = JSON.stringify(cart);
  localStorage.setItem("com.devsuperior.dscommerce/cart", str);
}

export function get() : OrderDTO {
  const str = localStorage.getItem("com.devsuperior.dscommerce/cart") || '{"items"=[]}';
  return JSON.parse(str);
}