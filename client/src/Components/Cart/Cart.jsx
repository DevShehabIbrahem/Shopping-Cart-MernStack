import React, { useState } from "react";
import "../../css/Cart/Cart.css";
import CheckoutCart from "../checkoutCart/CheckoutCart";

const Cart = ({ cartItems, DeleteItem }) => {
  const [show, setShow] = useState(false);
  const [values, setValues] = useState({ name: "", email: "" });
  console.log("🚀 ~ file: Cart.jsx ~ line 7 ~ Cart ~ values", values);

  //culc the Total price
  const TotalPrice = cartItems.reduce((acc, currnt) => acc + currnt.price, 0);

  //store the value from inputs
  const HandleChange = (e) => {
    //des the value and name from the E
    const { value, name } = e.target;

    //push the data inside the state
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    //push the value inside the arr After clicked sbmit
    const order = { name: values.name, email: values.email };

    setValues(order);
  };
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

        {/*checkOut*/}
        <div className="cart-checkout">
          <div className="price">Total Price: ${TotalPrice}</div>
          <button onClick={() => setShow(true)}>Checkout</button>
        </div>
      </div>

      <CheckoutCart
        handleSubmit={handleSubmit}
        HandleChange={HandleChange}
        show={show}
        setShow={setShow}
      />
    </>
  );
};

export default Cart;
