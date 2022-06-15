import React from "react";
import Input from "../Input/Input";

const CheckoutCart = ({ show, handleSubmit, HandleChange, setShow }) => {
  return (
    <div>
      {show && (
        <div className="check-form">
          <span className="close-modal" onClick={() => setShow(false)}>
            &times;
          </span>

          <form onSubmit={handleSubmit}>
            <div>
              <Input
                label="Name"
                type="text"
                id="name"
                name="name"
                onChange={HandleChange}
              />
            </div>

            <div>
              <Input
                label="Email"
                type="email"
                id="email"
                name="email"
                onChange={HandleChange}
              />
            </div>

            <button type="submit">CheckOut</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CheckoutCart;
