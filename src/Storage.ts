export type Cart = Record<string, number>;

export function setCart(id: number, count: number = 1): Cart {
  const cart = JSON.parse(sessionStorage.getItem('cart') || '{}');
  const productId = String(id);
  cart[productId] = (cart[productId] || 0) + count;
  if (cart[productId] <= 0) {
    delete cart[productId];
  }
  sessionStorage.setItem('cart', JSON.stringify(cart));
  return cart;
}

export function getCart(): Cart {
  return JSON.parse(sessionStorage.getItem('cart') || '{}');
}
