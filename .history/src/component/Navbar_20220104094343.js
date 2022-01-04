import React from 'react';
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <div className='grid wide' style={{ marginBottom: 40 }}>
            <div className='row'>
                <div className='col l-3'>
                    <h1>Redux shopping cart</h1>
                </div>
                <Link to="/cart">
                    <div className='col l-9'>
                        <div>
                            <h3>Cart</h3>
                            <p>Số lượng: 11</p>
                        </div>
                    </div>
                </Link>

            </div>


        </div>
    );
};

export default Navbar;