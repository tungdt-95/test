import React from 'react';
import { Link } from "react-router-dom";
im
const Product = (productData) => {
    return (
        <div className='col l-3'>
            <img src={productData.img} alt={productData.title}></img>
            <h4>{productData.title}</h4>
            <h4>{productData.price}</h4>
            <Link to="/product/someID">
                <button >View Item</button>
            </Link>
            <Link>
                <button >Mua</button>
            </Link>
        </div>
    );
};

export default Product;