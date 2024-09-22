import React, { useContext } from "react";
import { AiOutlineLeft, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { CartContext } from "../context/CartContext";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { TiDeleteOutline } from "react-icons/ti";

const Cart = () => {
  const {
    cartItems,
    showCart,
    setShowCart,
    totalQuantity,
    totalPrice,
    toggleCartItemQty,
  }: any = useContext(CartContext);
  const handleClose = () => {
    setShowCart(!showCart);
  };
  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        <button className="cart-heading" onClick={handleClose}>
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">{totalQuantity}</span>
        </button>
        <div className="product-container">
          {cartItems.map((currentProduct: any) => (
            <div className="product" key={currentProduct._id}>
              <Image
                loader={() => urlFor(currentProduct.images[0]).url()}
                src={urlFor(currentProduct.images[0]).url()}
                alt={currentProduct.images[0]}
                width={200}
                height={200}
                className="object-cover"
              />
              <div className="item-desc">
                <div className="flex top flex-col">
                  <h5>{currentProduct.name}</h5>
                  <button type="button" className="remove-itm">
                    <TiDeleteOutline />
                  </button>
                  <h4>{currentProduct.price} zl</h4>
                </div>
                <div className="flex bottom">
                  <div className="quantity-desc">
                    <span className="minus"
                    onClick={() =>
                      toggleCartItemQty(currentProduct._id, "minus")
                    }
                    >
                      <AiOutlineMinus />
                    </span>
                    <span className="num">{currentProduct.quantity}</span>
                    <span
                      className="plus"
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
        {cartItems.length > 0 && (
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
        )}
      </div>
    </div>
  );
};

export default Cart;
