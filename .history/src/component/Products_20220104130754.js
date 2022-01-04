import React from 'react';
import { connect } from "react-redux";
import Product from "./Product";



const Products = ({ products }) => {
    console.log(product);
    return (
        <div className='grid wide'>
            <div className='row'>
                {
                    products.map((prod) => (
                        <Product key={prod.id} productData={prod}></Product>
                    ))
                }
            </div>
        </div>
    );
};

const mapStatetoProp = state => {
    return {
        products: state.cart.products,
    }
}
const mapdispatchtoprop = dispatch => {
    return {
        Addtocart: (id) => dispatch(Addtocart(id))
    }
}

export default connect(mapStatetoProp, mapdispatchtoprop)(Products);