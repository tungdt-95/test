import React from 'react';
import {Link} from "react-router-dom"
const Product = ({productData}) => {
    return (
        <div className=''>
             <div className='col l-3'>
                        <img src={product.img}></img>
                        <h4>{product.title}</h4>
                        <h4>{product.price}</h4>
                        <button onClick={() => Addtocart(product.id)}>Mua</button>
                    </div>
        </div>
    );
};

export default Product;