import React from 'react';
import { connect } from "react-redux";
import Product from "./Product";



const Products = ({ products }) => {
console.log("🚀 ~ file: Products.js ~ line 8 ~ Products ~ products", products)
    return (
        <div className='grid wide'>
            <div className='row'>
                {
                    products.map((prod) => {
                        console.log("🚀 ~ file: Products.js ~ line 18 ~ products.map ~ prod", prod)
                       
                        return(
                        <Product key={prod.id} productData={prod}/>
                    )})                
                }
            </div>
        </div>
    );
};

const mapStatetoProp = state => {
console.log("🚀 ~ file: Products.js ~ line 26 ~ state", state)
    return {
        products: state.products,
    }
}

const mapdispatchtoprop = dispatch => {
    return {
        Addtocart: (id) => dispatch(Addtocart(id))
    }
}

export default connect(mapStatetoProp, mapdispatchtoprop)(Products);