import React from 'react';
import { connect } from 'react-redux';

const Cart = (products) => {
    return (
        <div>
            <button>Cart</button>
            {
                products.map(pro => (
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