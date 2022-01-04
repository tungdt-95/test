import React from 'react';
import {Link} from "react-router-dom"
const Navbar = () => {
    return (
        <div className='grid wide'>
            <div className='row'>
            <div className='col l-6'>
            <h1>Redux shopping cart</h1>

</div>
            </div>
            <div className='col l-6'>
            <h1>Redux shopping cart</h1>

</div>
            </div>
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