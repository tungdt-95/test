
import './App.css';
import React from "react";
import Header  from './component/Header';
import Product from './component/Product';
import Cart from "./component/Cart";
import Navbar from './component/Navbar';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
function App() {
  return (
    <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path={/cart}></Route>
          </Switch>

    </Router>
      
  );
}

export default App;
