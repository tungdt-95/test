import React from 'react';
import { connect } from "react-redux";
import Product from "./Product";


const Products = ({ products }) => {
    return (
        <div className='grid wide'>
            <div className='row'>
                {products?.map((product)=>{
                    return(
                        <Product key={product.id} img={product.img} title={product.title} price={product.price} />
                    )
                })}
            </div>
        </div>
    );
};

const mapStatetoProp = state => {
    return {
        products: state.shop.products,
    }
}



export default connect(mapStatetoProp)(Products);