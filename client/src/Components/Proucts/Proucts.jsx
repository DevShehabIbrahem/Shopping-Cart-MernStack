import React, { useState } from "react";
import "../../css/Proucts/products.css";
import ProductModal from "../Product Modal/ProductModal";

const Proucts = ({ product, AddToCart }) => {
  console.log("🚀 ~ file: Proucts.jsx ~ line 6 ~ Proucts ~ product", product);
  const [isOpen, setIsOpen] = useState("");

  const openModal = (products) => {
    setIsOpen(products);
  };

  const closeModal = () => {
    setIsOpen(null);
  };

  return (
    <>
      <div className="wrapper-product">
        <div className="product-image">
          <a href="##" onClick={() => openModal(product)}>
            <img src={product.imageurl} alt="product" />
          </a>
        </div>

        <div className="layout-product">
          <div className="title">{product.title}</div>
          <div className="price">{product.price}</div>
        </div>

        <input
          type="submit"
          className="inputs"
          value="Add To Cart"
          onClick={() => AddToCart(product)}
        />
      </div>

      {/** Modal PopUP**/}
      {isOpen && (
        <ProductModal
          closeModal={closeModal}
          openModal={openModal}
          product={product}
        />
      )}
    </>
  );
};

export default Proucts;
