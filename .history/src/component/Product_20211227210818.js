import React from 'react';
import { connect } from "react-redux"


const Product = ({ products }) => {


    return (
        <div>
            {
                products.map(product => (
                    <div>

                    </div>
                  
            }
        </div>
    );
};

const mapStatetoProp = state => {
    return {
        products: state.shop.products,
    }
}


export default connect(mapStatetoProp)(Product);