import React from 'react';

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
        cart: state.shop.products,
    }
}
export default Cart;