import React from 'react';
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <div className='grid wide' style={{ marginBottom: 40 }}>
            <div className='row'>
                <div className='col l-3'>
                <Link to="/">
                </Link>
                </div>
             
                    <div className='col l-9'>
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

export default Navbar;