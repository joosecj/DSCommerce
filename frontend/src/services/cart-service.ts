import { ProductDTO } from './../models/products';
import { OrderDTO, OrderItemDTO } from './../models/order';
import * as cartResposity from '../localStorage/cart-repository';

export function saveCart(cart: OrderDTO) {
  cartResposity.save(cart);
}

export function getCart() : OrderDTO {
  return cartResposity.get();
}

export function addProduct(product: ProductDTO) {
  const cart = cartResposity.get();
  const item = cart.items.find(x => x.productId === product.id);
  if (!item) {
    const newItem = new OrderItemDTO(product.id, 1, product.name, product.price, product.imgUrl);
    cart.items.push(newItem);
    cartResposity.save(cart);
  }
}