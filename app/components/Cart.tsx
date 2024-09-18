import React, {useContext} from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { CartContext } from "../context/CartContext";

const Cart = () => {
    const {showCart, setShowCart}:any = useContext(CartContext);
    const handleClose =()=> {
        setShowCart(!showCart)
    }
  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        <button className="cart-heading" onClick={handleClose}>
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">0</span>
        </button>
      </div>
    </div>
  );
};

export default Cart;
