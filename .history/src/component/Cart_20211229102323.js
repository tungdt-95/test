import React from 'react';
import {Addtocart} from "../redux/actions/actions"
import { connect } from 'react-redux';

const Cart = (cart) => {
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