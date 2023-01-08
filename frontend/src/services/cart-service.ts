import { ProductDTO } from './../models/products';
import { OrderDTO, OrderItemDTO } from './../models/order';
import * as cartResposity from '../localStorage/cart-repository';

export function saveCart(cart: OrderDTO) {
  cartResposity.save(cart);
}

export function getCart(): OrderDTO {
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

export function clearCart() {
  cartResposity.clear();
}

export function increseItem(productId: number) {
  const cart = cartResposity.get();
  const item = cart.items.find(x => x.productId === productId);
  if (item) {
    item.quantity++
    cartResposity.save(cart);
  }
}

export function decreseItem(productId: number) {
  const cart = cartResposity.get();
  const item = cart.items.find(x => x.productId === productId);
  if (item) {
    item.quantity--
    if (item.quantity < 1) {
      cart.items = cart.items.filter(x => x.productId !== productId);
    }
    cartResposity.save(cart);
  }
}