import React from 'react';
import { connect } from "react-redux";

function Cart({cart}) {
    return (
        <div>
            {
                cart.map((item) =>
                <div>
                    <img src={item.img}></img>
                    <h4>{item.title}</h4>
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