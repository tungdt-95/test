import React from 'react';
import { connect } from "react-redux";

function Cart(props) {
    return (
        <div>
            
        </div>
    );
}
const mapStatetoProp = state => {
    return {
        cart: state.shop.products,
    }
} 
export default Cart;