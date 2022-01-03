import React from 'react';
import { connect } from 'react-redux';

const Cart = (cart) => {
    return (
        <div>
            <button>Cart</button>
            {
                cart.map(pro => (
                    <div>
                        {pro.ti}
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