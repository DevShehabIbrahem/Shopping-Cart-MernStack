import React, { useState, useEffect } from "react";
import "../../css/Main/Main.css";
import data from "../../data.json";
import Cart from "../Cart/Cart";
import Filter from "../Filter/Filter";
import Proucts from "../Proucts/Proucts";

const Main = () => {
  const [products, setProducts] = useState(data);
  const [fillterSize, setFillterSize] = useState([]);

  const CartProducts = localStorage.getItem("CartItems");
  console.log(CartProducts);
  const [cartItems, setCartItems] = useState(JSON.parse(CartProducts));

  const [size, setSize] = useState("ALL");
  const [order, setOrder] = useState("");

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

    //Search for Size Inside The Elements [xxl,m,s,xl,sm]
    let newProducts = products.filter((p) => p.sizes.indexOf(value) !== -1);

    setFillterSize(newProducts);
  };

  // handle Filter By Order
  const handleorder = (e) => {
    let { value } = e.target;

    setOrder(value);

    let productsClone = [...products];

    //Sorting By Order
    let newOrder = productsClone.sort(function (a, b) {
      if (value === "Lowest") {
        return a.price - b.price;
      } else if (value === "Highest") {
        return b.price - a.price;
      } else {
        return a.id < b.id ? 1 : -1; // Sorting Element By Id [String]
      }
    });

    setProducts(newOrder);
  };

  return (
    <main>
      <div className="wrapper">
        <div className="filter">
          <Filter
            Proucts={data}
            fillterSize={fillterSize}
            handleSize={handleSize}
            handleorder={handleorder}
            size={size}
            order={order}
          />
        </div>

        <div className="products">
          {size === "ALL" ? (
            <>
              {products.map((product) => (
                <Proucts product={product} AddToCart={AddToCart} />
              ))}
            </>
          ) : (
            <>
              {fillterSize.map((product) => (
                <Proucts product={product} />
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
