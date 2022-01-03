import React from 'react';
import { connect } from "react-redux"


const Product = ({ products }) => {


    return (
        <div>
            
                 {products.map((product) => {
                    return <Product key={product.id} product={product}></Product>;
                })}
        </div>
    );
};

const mapStatetoProp = state => {
    return {
        products: state.shop.products,
    }
}

const Product = (props) => {
    const { title , price} = props.product;

    return (
        <div className='grid wide'>
            <div className='row'>
                <div className='col l-4'>
                    <h4>{title}</h4>
                    <h4>{price}</h4>
                </div>
            </div>
        </div>
    )
}

export default connect(mapStatetoProp)(Product);