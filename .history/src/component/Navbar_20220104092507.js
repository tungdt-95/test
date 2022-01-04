import React from 'react';
import {Link} from "react-router-dom"
const Navbar = () => {
    return (
        <div>
            <h1>Redux shopping cart</h1>
            <Link to="/cart">
                <div>
                    h3
                </div>
            </Link>
        </div>
    );
};

export default Navbar;