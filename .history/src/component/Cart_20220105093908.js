import React from 'react';
import { connect } from "react-redux";
import Cartitem from './Cartitem';
function Cart(cart ) {
    console.log(cart);
    return (
        <div>
            {
                cart.map((item) =>
                    <Cartitem key={item.id} img={item.img} title={item.title} price={item.price} />
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