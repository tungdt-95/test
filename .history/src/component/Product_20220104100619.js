import React from 'react';
import {Link} from "react-router-dom"
const Product = ({productData}) => {
    return (
        <div className='grid wide'>
             <div className='col l-3'>
                        <img></img>
                        <h4></h4>
                        <h4></h4>
                        <Link to="/product/someID">
                            <button >View Item</button>
                        </Link>
                        <Li
                        <button >Mua</button>
                    </div>
        </div>
    );
};

export default Product;