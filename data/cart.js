export const cart = [];

export function add_to_cart(productId) {
  const qty_selector = document.querySelector(
    `.js-quantity-selector-${productId}`,
  );

  const converted_qty_selector = Number(qty_selector.value);

  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += converted_qty_selector;
  } else {
    cart.push({
      productId,
      quantity: converted_qty_selector,
    });
  }
}
