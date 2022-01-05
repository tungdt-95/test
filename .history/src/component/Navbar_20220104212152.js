import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux"
const Navbar = () => {
    return (
        <div className='grid wide' style={{ marginBottom: 40 }}>
            <div className='row'>
                <div className='col l-6'>
                    <Link to="/">
                        <h1>Redux shopping cart</h1>
                    </Link>
                </div>
                <div className='col l-6'>
                    <div>
                        <Link to="/cart">
                            <h3>Cart</h3>
                        </Link>
                        <p>Số lượng: 11</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
const mapStatetoProp = state => {
    return {
        cart: state.shop.cart,
    }
} 
export default connect()(Navbar);