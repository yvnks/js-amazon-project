export let cart = [
    {
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 1,
      deliveryOptionId: "1",
    },
    {
      productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 2,
      deliveryOptionId: "2",
    },
  ];


function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

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
  saveToStorage();
}

export function removeItemFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (productId !== cartItem.productId) {
      newCart.push(cartItem);
    }
  });
  cart = newCart;
  saveToStorage();
}
