"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { FiShoppingBag } from "react-icons/fi";
import Cart from "./Cart";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { showCart, setShowCart }: any = useContext(CartContext);
  const handleClick = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <div className="w-full h-[80px] bg-white border-b">
        <div className="container w-full h-full flex justify-between items-center">
          <Link href="/" className="logo">
            Art Kiss
          </Link>
          <button className="cart-icon" onClick={handleClick}>
            <FiShoppingBag />
            <span className="cart-item-qty">0</span>
          </button>
        </div>
      </div>
      {showCart && <Cart />}
    </>
  );
};

export default Navbar;
