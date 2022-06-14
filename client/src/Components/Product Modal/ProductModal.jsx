import React from "react";
import Modal from "react-modal";
import "../../css/Product Modal/productModal.css";
const ProductModal = ({ closeModal, product, openModal }) => {
  return (
    <div>
      <Modal isOpen={true} ariaHideApp={false} onRequestClose={closeModal}>
        <span className="close-modal" onClick={closeModal}>
          &times;
        </span>
        <div className="wrapper-modal">
          <div className="image-modal">
            <a href="##" onClick={() => openModal(product)}>
              <img src={product.imageurl} alt="product" />
            </a>
          </div>
          <div className="layout-modal">
            <div className="title">{product.title}</div>
            <div className="dec">{product.dec}</div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProductModal;
