import React from 'react';
import { connect } from "react-redux"
import {Addtocart} from "../redux/actions/actions"

const Products = ({ products }) => {


    return (
        <div className='grid wide'>
            <div className='row'>
                {
                products.map(product => (
                    <Product key={product.id }></Product>
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
    return{
        Addtocart: (id) => dispatch(Addtocart(id))
    }
}

export default connect(mapStatetoProp,mapdispatchtoprop)(Products);