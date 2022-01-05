import React from 'react';
import { connect } from "react-redux";
import Cartitem from './Cartitem';
function Cart({ cart }) {
    return (
        <div>
            {
                cart.map((item) =>
                    <Cartitem key={.id} img={.img} title={.title} price={.price} /> 
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