"use client";
import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }: any) => {
  const [showCart, setShowCart] = useState(false);
  const [qty, setQty] = useState(1);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const plusQty = () => {
    setQty((prevQty: number) => prevQty + 1);
  };
  const minusQty = () => {
    setQty((prevQty: number) => (prevQty - 1 < 1 ? 1 : prevQty - 1));
  };

  const addProduct = (product: any, quantity: number) => {
    const checkProductInCart = cartItems.find(
      (item: any) => item._id === product._id
    );

    setTotalQuantity((prev) => prev + quantity);
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct: any) => {
        if (cartProduct._id === product._id) {
          return { ...cartProduct, quantity: cartProduct.quantity + quantity };
        } else {
          return cartProduct;
        }
      });
      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
  };

  const toggleCartItemQty = (id: any, value: any) => {
    let foundProduct = cartItems.find((item) => item._id === id);
    const otherProduct = cartItems.filter((items) => items._id !== id);
    if (value === "plus") {
      setCartItems([
        ...otherProduct,
        { ...foundProduct, quantity: foundProduct.quantity + 1 },
      ]);
      setTotalPrice((prevTotalPrice)=> prevTotalPrice + foundProduct.price)
    } else if (value === "minus" && foundProduct.quantity > 1) {
      setCartItems([
        ...otherProduct,
        { ...foundProduct, quantity: foundProduct.quantity - 1 },
      ]);
      setTotalPrice((prevTotalPrice)=> prevTotalPrice - foundProduct.price)
    }
  };
  return (
    <CartContext.Provider
      value={{
        showCart,
        setShowCart,
        qty,
        plusQty,
        minusQty,
        cartItems,
        addProduct,
        totalQuantity,
        totalPrice,
        toggleCartItemQty,
      }}
    >
      <div>{children}</div>
    </CartContext.Provider>
  );
};
