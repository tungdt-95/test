import React from 'react';
import {connect} from "react-redux"
const Product = () => {
    const products = [
       
    ];

    return (
        <div>
            {
                products.map(product =>(
                    <div>
                        <h4>{product.title}</h4>
                    </div>

                ))
            }
        </div>
    );
};

const mapStatetoProp = state => {
    return{
        products:state.shop.products,
    }
}


export default connect(mapStatetoProp)( Product);