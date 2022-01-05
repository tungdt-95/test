import React ,{useState,useEffect}from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux"
const Navbar = (cart) => {
    const [cartcount,setcartcount] = useState(0);
    useEffect(() =>{
        let count = 0;
        car.forEach(element => {
            
        });

    },[cart,cartcount])
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
                        <p>Số lượng: {cartcount}</p>
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
export default connect(mapStatetoProp)(Navbar);