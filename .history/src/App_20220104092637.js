
import './App.css';
import React from "react";
import Header  from './component/Header';
import Product from './component/Product';
import Cart from "./component/Cart";
import Navbar from './component/Navbar';
function App() {
  return (
      <div>
          <Cart/>
          <Header/>
          <Navbar
          <Product/>
      </div>
  );
}

export default App;
