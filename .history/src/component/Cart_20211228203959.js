import React from 'react';
import { connect } from 'react-redux';

const Cart = () => {
    return (
        <div>
            <button>Cart</button>
            {
            
            }
        </div>
    );
};
const mapStatetoProp = state => {
    return {
        cart: state.shop.cart,
    }
}
export default connect(mapStatetoProp)(Cart) ;