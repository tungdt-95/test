import React from 'react';
import {Link} from "react-router-dom"
const Navbar = () => {
    return (
        <div className='grid wide'>
            <div className='row '>

            </div>
            <h1>Redux shopping cart</h1>
            <Link to="/cart">
                <div>
                    <h3>Cart</h3>
                    <span>Số lượng: 1</span>
                </div>
            </Link>
        </div>
    );
};

export default Navbar;