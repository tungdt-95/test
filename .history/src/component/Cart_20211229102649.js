import React from 'react';
import { connect } from 'react-redux';

const Cart = (produc) => {
    return (
        <div>
            <button>Cart</button>
            {
                cart.map(pro => (
                    <div>
                        {pro.title}
                    </div>
                ))
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