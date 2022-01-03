import React from 'react';
import { connect } from "react-redux"


const Product = ({ products }) => {


    return (
        <div>
            {
                products.map(product => (

                    ))
            }
        </div>
    );
};

const mapStatetoProp = state => {
    return {
        products: state.shop.products,
    }
}

const Products = () => {
    return (
        <div className='grid wide'>
            <div className='row'>
                <div className='col l-4'>
                    <h4>{product.title}</h4>
                    <h4>{product.price}</h4>
                </div>
            </div>
        </div>
    )
}

export default connect(mapStatetoProp)(Product);