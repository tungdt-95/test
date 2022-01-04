import React from 'react';
import { connect } from "react-redux";
import Product from "./Product";



const Products = ({ products }) => {
console.log("🚀 ~ file: Products.js ~ line 8 ~ Products ~ products", products)
    return (
        <div className='grid wide'>
            <div className='row'>
                {
                    // products.map((prod) =>                       
                    // (
                    //     <Product key={prod.id} productData={prod}/>
                    // ))                
                }
            </div>
        </div>
    );
};

const mapStatetoProp = state => {
    return {
        products: state.cartproducts,
    }
}

const mapdispatchtoprop = dispatch => {
    return {
        // Addtocart: (id) => dispatch(Addtocart(id))
    }
}

export default connect(mapStatetoProp, mapdispatchtoprop)(Products);