import React from 'react';
import { connect } from "react-redux";
import Ca
function Cart({cart}) {
    return (
        <div>
            {
                cart.map((item) =>
            
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