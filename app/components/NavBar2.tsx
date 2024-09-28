"use client";
import Link from "next/link";
import React, { useState, useContext } from "react";
import { FiShoppingBag } from "react-icons/fi";
import Cart from "./Cart";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { showCart, setShowCart, totalQuantity }: any = useContext(CartContext);
  const handleClick = () => {
    setShowCart(!showCart);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-400 rounded-lg shadow m-4 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Гамбургер-меню для мобильных устройств */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-16 6h16"}
              />
            </svg>
          </button>
        </div>
        {/* Логотип */}
        <div className="text-white text-xl font-bold">Art Kiss</div>

        {/* Навигационные ссылки для десктопа */}
        <div className="hidden md:flex space-x-4 text-white">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/" className="hover:text-gray-300">
            Services
          </Link>
          <Link href="/contacts" className="hover:text-gray-300">
            Contacts
          </Link>
        </div>
        <button className="cart-icon" onClick={handleClick}>
          <FiShoppingBag />
          <span className="cart-item-qty">{totalQuantity}</span>
        </button>
      </div>

      {/* Меню для мобильных устройств */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden text-white`}
      >
        <a href="/" className="block px-4 py-2 hover:bg-slate-600">
          Home
        </a>
        <a href="/about" className="block px-4 py-2 hover:bg-slate-600">
          About
        </a>
        <a href="/" className="block px-4 py-2 hover:bg-slate-600">
          Services
        </a>
        <a href="/" className="block px-4 py-2 hover:bg-slate-600">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
