import { create } from "zustand";

const useCartStore = create((set) => ({
  product: [],
  increaseCartCount: (prod) =>
    new Promise((resolve, reject) => {
      if (!prod) {
        reject("Something went wrong !");
      }
      set((state) => ({
        product: [...handleCart(state.product, "INC", prod)],
      }));
      resolve("Product added to cart !");
    }),

  decreaseCartCount: (prod) =>
    new Promise((resolve, reject) => {
      if (!prod) {
        reject("Something went wrong !");
      }
      set((state) => ({
        product: [...handleCart(state.product, "DEC", prod)],
      }));
    }),
  removeFromCart: (prod) =>
    new Promise((resolve, reject) => {
      if (!prod) {
        reject("Something went wrong !");
      }
      set((state) => ({
        product: [...handleCart(state.product, "REM", prod)],
      }));
      resolve("Product removed from cart !");
    }),
}));
export default useCartStore;

const handleCart = (productInCart, type, requestedProduct) => {
  let updatedProduct = [...productInCart];
  if (type === "INC") {
    if (updatedProduct.length == 0) {
      updatedProduct.push({
        ...requestedProduct,
        quantity: 1,
        price: Math.floor(Math.random() * (100 - 30 + 1)) + 30,
      });
      return updatedProduct;
    }
    let alreadyIncart = false;
    //already in cart
    updatedProduct.map((prod) => {
      console.log(prod, "dd");
      if (prod?.idMeal && prod?.idMeal === requestedProduct?.idMeal) {
        (prod.quantity = prod.quantity + 1), (alreadyIncart = true);
      } else if (prod?.idDrink && prod.idDrink === requestedProduct?.idDrink) {
        (prod.quantity = prod.quantity + 1), (alreadyIncart = true);
      }
    });
    if (!alreadyIncart) {
      updatedProduct.push({
        ...requestedProduct,
        quantity: 1,
        price: Math.floor(Math.random() * (100 - 30 + 1)) + 30,
      });
    }
  } else if (type === "DEC") {
    updatedProduct.map((prod) => {
      if (prod?.idMeal && prod?.idMeal === requestedProduct?.idMeal) {
        prod.quantity = prod.quantity - 1;
      } else if (prod?.idDrink && prod?.idDrink === requestedProduct?.idDrink) {
        prod.quantity = prod.quantity - 1;
      }
    });
  } else if (type === "REM") {
    return updatedProduct.filter((prod) => {
      return prod?.idDrink !== requestedProduct?.idDrink ||  prod?.idMeal !== requestedProduct?.idMeal;
    });
  }

  return updatedProduct;
};
