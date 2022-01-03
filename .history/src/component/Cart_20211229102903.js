import React from 'react';
import { connect } from 'react-redux';

const Cart = (products) => {
    return (
        <div>
            <button>Cart</button>
          
        </div>
    );
};
const mapStatetoProp = state => {
    return {
        products: state.cart.products,
    }
}
export default connect(mapStatetoProp)(Cart) ;