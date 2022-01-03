import React from 'react';
import { connect } from 'react-redux';

const Cart = (cart) => {
    console.log(cart);
    return (
        <div>
            <button>Cart</button>

        </div>
    );
};
const mapStatetoProp = state => {
    return {
        cart: state.shop.cart,
    }
}
export default connect(mapStatetoProp)(Cart) ;