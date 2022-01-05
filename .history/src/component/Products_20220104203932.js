import React from 'react';
import { connect } from "react-redux";
import Product from "./Product";
import {} from "../redux/actions/ac"


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
        products: state.cart.products,
    }
}

const mapdispatchtoprop = dispatch => {
    return {
        // Addtocart: (id) => dispatch(Addtocart(id))
    }
}

export default connect(mapStatetoProp, mapdispatchtoprop)(Products);