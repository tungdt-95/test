import React from 'react';
import { connect } from "react-redux"


const Product = ({products}) => {
   

    return (
        <div className='grid wide'>
            {
                products.map(product =>(
                    <div className=''>
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