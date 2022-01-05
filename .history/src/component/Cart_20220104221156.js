import React from 'react';
import { connect } from "react-redux";

function Cart({}) {
    return (
        <div>
            
        </div>
    );
}
const mapStatetoProp = state => {
    return {
        cart: state.shop.cart,
    }
} 
export default connect(mapStatetoProp)(Cart);