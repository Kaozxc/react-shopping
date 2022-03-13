import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./components/Home";
import Shop from "./components/Shop";
import Header from "./components/Header";
import './App.css'
import data from './components/Data';
import Cart from "./components/Cart";

const App = () => {
  const { productItems } = data;
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? {
              ...productExist,
              quantity: productExist.quantity + 1,
            }
            : item
        )
      )
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? {
              ...productExist,
              quantity: productExist.quantity - 1,
            }
            : item
        )
      );
    }
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header cartItems={cartItems} />
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/react-shopping/" element={<Home />}></Route>
          <Route
            path="/Shop"
            element={
              <Shop
                productItems={productItems}
                handleAddProduct={handleAddProduct}
              />
            }
          ></Route>
          <Route
            path="/Cart"
            element={
              <Cart
                cartItems={cartItems}
                handleAddProduct={handleAddProduct}
                handleRemoveProduct={handleRemoveProduct}
                emptyCart={emptyCart}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;