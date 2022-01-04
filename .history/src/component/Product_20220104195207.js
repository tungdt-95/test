import React from 'react';
import { Link } from "react-router-dom";

const Product = (productData) => {
console.log("🚀 ~ file: Product.js ~ line 5 ~ Product ~ productData", productData)
    return (
        <div className='col l-3'>
            <img src={productData.img}></img>
            <h4>{productData.tt}</h4>
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