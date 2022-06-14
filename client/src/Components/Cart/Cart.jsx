import React from "react";
import "../../css/Cart/Cart.css";

const Cart = ({ cartItems, DeleteItem }) => {
  return (
    <div className="cart-wrapper">
      {cartItems.map(({ title, imageurl, price, qty, id }) => (
        <div className="cart-items">
          <div className="cart-fed">
            <img src={imageurl} alt={title} />
            <div className="cart-info">
              <p>title:{title}</p>
              <p>price:{price}</p>
              <p>qty:{qty}</p>
            </div>
          </div>
          <button onClick={() => DeleteItem({ id })}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
