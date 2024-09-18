"use client";
import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }: any) => {
  const [showCart, setShowCart] = useState(false);
  const [qty, setQty] = useState(1);
  const [cartItems, setCartItems] = useState<any[]>([]);

  const plusQty = () => {
    setQty((prevQty: number) => prevQty + 1);
  };
  const minusQty = () => {
    setQty((prevQty: number) => (prevQty - 1 < 1 ? 1 : prevQty - 1));
  };

  const addProduct = (product:any, quantity:number) =>{
    setCartItems([...cartItems, {...product}])
  }
  return (
    <CartContext.Provider
      value={{ showCart, setShowCart, qty, plusQty, minusQty, cartItems, addProduct }}
    >
      <div>{children}</div>
    </CartContext.Provider>
  );
};
