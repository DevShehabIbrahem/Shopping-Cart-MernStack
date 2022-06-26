import React, { useState } from "react";
import Input from "../Input/Input";
import CartModal from "./CartModal";

const CheckoutCart = ({
  show,
  handleSubmit,
  HandleChange,
  setShow,
  values,
  isOpen,
  closeModal,
  openModal,
  TotalPrice,
}) => {
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

            <button type="submit" onClick={() => openModal(values)}>
              CheckOut
            </button>
          </form>
        </div>
      )}
      <CartModal
        isOpen={isOpen}
        closeModal={closeModal}
        values={values}
        TotalPrice={TotalPrice}
      />
    </div>
  );
};

export default CheckoutCart;
