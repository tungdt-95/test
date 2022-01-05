import React from 'react';
import { connect } from "react-redux";

function Cart({cart}) {
    return (
        <div>
            {
                cart.map((item) =>
                <div>
                    <img sr></img>
                </div>
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