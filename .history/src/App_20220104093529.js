
import './App.css';
import React from "react";
import Header  from './component/Header';
import Product from './component/Product';
import Cart from "./component/Cart";
import Navbar from './component/Navbar';
import {BrowserRouter as Rou} from "react-router-dom"
function App() {
  return (
      <div>
          <Cart/>
          <Header/>
          <Navbar></Navbar>
          <Product/>
      </div>
  );
}

export default App;
