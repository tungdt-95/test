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

const Product = () => {
    return(

    )
}

export default connect(mapStatetoProp)(Product);