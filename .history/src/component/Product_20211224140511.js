import React from 'react';
import { connect } from "react-redux"

@import "grid.css"

const Product = ({products}) => {
   

    return (
        <div className='grid wide'>
            {
                products.map(product =>(
                    <div>
                        <h4>{product.title}</h4>
                        <h4>{product.price}</h4>

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