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
        products: state.shop.product,
    }
}
export default connect(mapStatetoProp)(Cart) ;