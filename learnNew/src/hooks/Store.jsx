import { create } from "zustand";

const initialState = {
  cart: [],
};

export const useCart = create((set) => ({
  
}));

export const useCartLearn = create((set) => ({
  ...initialState,
  addItemToCart: (product) =>
    set((state) => {
      const updatedCart = [...state.cart, product].map((newProduct, index) => {
        return { ...newProduct, id: index };
      });
      return { cart: updatedCart };
    }),
  removeFromCart: (cartId) =>
    set((state) => ({
      cart: state.cart.filter((cart) => cart.id !== cartId),
    })),
}));
