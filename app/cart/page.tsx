"use client";
import React, { useContext } from "react";
import { AiOutlineLeft, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { CartContext } from "../context/CartContext";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { TiDeleteOutline } from "react-icons/ti";
import { div } from "framer-motion/client";
import { emptyCart } from "@/public";
import Link from "next/link";

export default function Cart() {
  const {
    cartItems,
    showCart,
    setShowCart,
    totalQuantity,
    totalPrice,
    toggleCartItemQty,
    onRemove,
  }: any = useContext(CartContext);
  return (
    <div className="mx-[5%] my-[2%] rounded-xl bg-gray-300 p-[2%]">
      <div className="text-2xl text-center">
        <span>Twoje zamówienie {totalQuantity} szt.</span>{" "}
        {cartItems.length > 0 && (
          <span>
            <p>Total Price</p>
            <p> {totalPrice} zl</p>
          </span>
        )}
      </div>
      {cartItems.length === 0 && (
        <div className=" flex flex-col items-center">
          <Image src={emptyCart} alt="empty cart" />
          <Link href="/">
            <button className="border-2 border-black p-3">Wróć do sklepu</button>
          </Link>
        </div>
      )}
      <div className="product-container bg-gray-400 rounded-xl">
        {cartItems.map((currentProduct: any) => (
          <div className="product" key={currentProduct._id}>
            <Image
              loader={() => urlFor(currentProduct.images[0]).url()}
              src={urlFor(currentProduct.images[0]).url()}
              alt={currentProduct.images[0]}
              width={200}
              height={200}
              className="object-cover rounded-xl"
            />
            <div className="item-desc">
              <div className="flex flex-col">
                <button
                  type="button"
                  className="text-2xl text-gray-700 cursor-pointer w-6 ml-auto"
                  onClick={() => onRemove(currentProduct)}
                >
                  <TiDeleteOutline />
                </button>
                <h5>{currentProduct.name}</h5>
                <h4>{currentProduct.price} zl</h4>
              </div>
              <div className="flex bottom">
                <div className="quantity-desc">
                  <span
                    // className="minus"
                    onClick={() =>
                      toggleCartItemQty(currentProduct._id, "minus")
                    }
                  >
                    <AiOutlineMinus />
                  </span>
                  <span className="num">{currentProduct.quantity}</span>
                  <span
                    // className="plus"
                    onClick={() =>
                      toggleCartItemQty(currentProduct._id, "plus")
                    }
                  >
                    <AiOutlinePlus />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* {cartItems.length > 0 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Total Price</h3>
              <h3> {totalPrice} zl</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="checkout btn">
                Pay
              </button>
            </div>
          </div>
        )} */}
    </div>
  );
}
