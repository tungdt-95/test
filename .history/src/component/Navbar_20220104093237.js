import React from 'react';
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <div className='grid wide' style={{}}>
            <div className='row'>
                <div className='col l-6'>
                    <h1>Redux shopping cart</h1>

                </div>
                <div className='col l-6'>
                        <div>
                            <h3>Cart</h3>
                            <span>Số lượng: 1</span>
                        </div>
                </div>
            </div>


        </div>
    );
};

export default Navbar;