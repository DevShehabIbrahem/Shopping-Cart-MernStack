import React, { useState } from "react";
import Modal from "react-modal";

const CartModal = ({ isOpen, closeModal, values, TotalPrice }) => {
  console.log(
    "🚀 ~ file: CartModal.jsx ~ line 5 ~ CartModal ~ isOpen",
    !!values
  );

  return (
    <>
      {!!isOpen.name && !!isOpen.email && (
        <Modal isOpen={true} ariaHideApp={false} onRequestClose={closeModal}>
          <tr>
            <td>{isOpen.name}</td>
          </tr>
          <tr>
            <td>{isOpen.email}</td>
          </tr>
          <tr>
            <td>Totla Price :${TotalPrice}</td>
          </tr>
        </Modal>
      )}
    </>
  );
};

export default CartModal;
