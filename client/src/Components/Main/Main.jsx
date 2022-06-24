import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../css/Main/Main.css";
import data from "../../data.json";

import Cart from "../Cart/Cart";
import Filter from "../Filter/Filter";
import Proucts from "../Proucts/Proucts";
import {
  fetchProducts,
  shopping,
  filterbySize,
  filtersize,
  filterSort,
  Allproducts,
  orderFiltring,
  filterSizeByOrder,
} from "../../Redux/Slice/productsSilce";

import axios from "../../Api/axios";
const Main = () => {
  const products = useSelector(shopping);
  console.log("🚀 ~ file: Main.jsx ~ line 21 ~ Main ~ products", products);
  const Bysize = useSelector(filtersize);

  console.log("🚀 ~ file: Main.jsx ~ line 23 ~ Main ~ Byorder", Bysize);
  const dispatch = useDispatch();

  const CartProducts = localStorage.getItem("CartItems");
  const [cartItems, setCartItems] = useState(JSON.parse(CartProducts));

  const [size, setSize] = useState("ALL");
  const [order, setOrder] = useState("");
  console.log("🚀 ~ file: Main.jsx ~ line 34 ~ Main ~ order", order);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  //Add To Cart
  const AddToCart = (product) => {
    //check if product is exsit
    const productIsExist = cartItems.find((p) => p.id === product.id); // =>obj

    //incress The qty
    const incressQTY = { ...productIsExist, qty: productIsExist?.qty + 1 };

    const prodQTY = cartItems.map((p) =>
      p.id === product.id ? incressQTY : p
    );

    //AddToCart First Time
    const AddFirstTime = [...cartItems, { ...product, qty: 1 }];

    if (productIsExist) {
      setCartItems(prodQTY);
    } else {
      setCartItems(AddFirstTime);
    }
  };

  //removeItems
  const DeleteItem = ({ id }) => {
    const Remove = cartItems.filter((p) => p.id !== id);

    if (Remove) {
      setCartItems(Remove);
    }
  };

  //Save Cart Items in Local Storge
  useEffect(() => {
    localStorage.setItem("CartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // handle Filter By Size

  const handleSize = (e) => {
    let { value } = e.target;

    setSize(value);
    dispatch(filterbySize(value));
  };

  // handle Filter By Order

  const handleorder = (e) => {
    let { value } = e.target;

    setOrder(value); // xl,md,sm

    //copy clone from the products arr to adjust

    dispatch(Allproducts(value));
  };

  return (
    <main>
      <div className="wrapper">
        <div className="filter">
          <Filter
            Proucts={products}
            handleSize={handleSize}
            Bysize={Bysize}
            handleorder={handleorder}
            size={size} //string for option
            order={order} //string  for option
          />
        </div>

        <div className="products">
          {size === "ALL" ? (
            <>
              {products?.map((product) => (
                <Proucts product={product} AddToCart={AddToCart} />
              ))}
            </>
          ) : (
            <>
              {Bysize?.map((product) => (
                <Proucts product={product} AddToCart={AddToCart} />
              ))}
            </>
          )}
        </div>
      </div>

      <Cart cartItems={cartItems} DeleteItem={DeleteItem} />
    </main>
  );
};

export default Main;
