"use client";
import Link from "next/link";
import React, { useState, useContext } from "react";
import { FiShoppingBag } from "react-icons/fi";
import Cart from "./Cart";
import { CartContext } from "../context/CartContext";
import Image from "next/image";
import { facebookLogo, instagramLogo } from "@/public";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { showCart, setShowCart, totalQuantity }: any = useContext(CartContext);
  // const handleClick = () => {
  //   setShowCart(!showCart);
  // };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-400 rounded-lg shadow  mt-[1%] mx-[5%] py-4">
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
        <Link href="/" className="text-white text-xl font-bold">
          Art Kiss
        </Link>

        {/* Навигационные ссылки для десктопа */}
        <div className="hidden md:flex space-x-4 text-white">
          <Link href="/" className="hover:text-gray-300">
            Strona główna
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            O nas
          </Link>
          <Link href="/categories" className="hover:text-gray-300">
            Kategorie
          </Link>
          <Link href="/contacts" className="hover:text-gray-300">
            Kontakty
          </Link>
        </div>
        <Link href="/cart">
          <button className="cart-icon">
            <FiShoppingBag />
            <span className="cart-item-qty">{totalQuantity}</span>
          </button>
        </Link>
      </div>

      {/* Меню для мобильных устройств */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden text-white`}>
        <Link href="/" className="block px-4 py-2 hover:bg-slate-600">
          Strona główna
        </Link>
        <Link href="/about" className="block px-4 py-2 hover:bg-slate-600">
          O nas
        </Link>
        <Link
          href="/categories"
          className="block px-4 py-2 hover:bg-slate-600"
        >
          Kategorie
        </Link>
        <Link href="/contacts" className="block px-4 py-2 hover:bg-slate-600">
          Kontakty
        </Link>
        <div className="flex justify-end pr-[3%]">
          <a
            href="https://www.facebook.com/p/Art-Kiss-Design-100066490130748/?_rdr"
            target="_blank"
          >
            <Image
              src={facebookLogo}
              alt="facebookLogo"
              className="w-12 h-12"
            ></Image>
          </a>
          <a
            href="https://www.instagram.com/_art_kiss_design/"
            target="_blank"
          >
            <Image
              src={instagramLogo}
              alt="instagramLogo"
              className="w-12 h-12"
            ></Image>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
