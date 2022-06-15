import React, { useState } from "react";
import "../../css/Cart/Cart.css";

const Cart = ({ cartItems, DeleteItem }) => {
  const [show, setShow] = useState(false);
  //culc the Total price
  const TotalPrice = cartItems.reduce((acc, currnt) => acc + currnt.price, 0);

  return (
    <>
      <div className="cart-wrapper">
        {cartItems?.map(({ title, imageurl, price, qty, id }) => (
          <div className="cart-items">
            <div className="cart-fed">
              <img src={imageurl} alt={title} />
              <div className="cart-info">
                <p>title: {title}</p>
                <p>price: {price}</p>
                <p>qty: {qty}</p>
              </div>
            </div>
            <button onClick={() => DeleteItem({ id })}>Remove</button>
          </div>
        ))}

        <div className="cart-checkout">
          <div className="price">Total Price: ${TotalPrice}</div>
          <button onClick={() => setShow(true)}>Checkout</button>
        </div>
      </div>
      {show && (
        <div className="check-form">
          <span className="close-modal" onClick={() => setShow(false)}>
            &times;
          </span>
          <form>
            <div>
              <label htmlFor="name">name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div>
              <div>
                <label htmlFor="email">email</label>
                <input type="email" id="email" name="email" />
              </div>
            </div>
            <button>CheckOut</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Cart;
