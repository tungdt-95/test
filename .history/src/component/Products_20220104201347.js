import React from 'react';
import { connect } from "react-redux";
import Product from "./Product";



const Products = ({ products }) => {
    return (
        <div className='grid wide'>
            <div className='row'>
                {
                    products.map(prod => (
                        <Product key={prod}/>
                    ))
                    // products.map((prod) => {
                    //     return (
                    //         <Product key={prod.id} productData={prod} />
                    //     )
                    // })
                }
            </div>
        </div>
    );
};

const mapStatetoProp = state => {
    return {
        products: state.shop.products,
    }
}

const mapdispatchtoprop = dispatch => {
    return {
        // Addtocart: (id) => dispatch(Addtocart(id))
    }
}

export default connect(mapStatetoProp, mapdispatchtoprop)(Products);