import React from 'react';
import { connect } from "react-redux"


const Product = ({ products }) => {


    return (
        <div>
            
                 {products.map((product,index) => {
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

const Products = (props) => {
    const {img , title , price} = props.product;

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