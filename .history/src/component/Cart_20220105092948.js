import React from 'react';
import { connect } from "react-redux";
import Cartitem from './Cartitem';
function Cart({ cart }) {
    return (
        <div>
            {
                cart.map((item) =>
                    <Cartitem key={product.id} img={product.img} title={product.title} price={product.price} /> 
                )
            }
        </div>
    );
}
const mapStatetoProp = state => {
    return {
        cart: state.shop.cart,
    }
}
export default connect(mapStatetoProp)(Cart);