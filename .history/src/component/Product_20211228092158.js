import React from 'react';
import { connect } from "react-redux"


const Product = ({ products }) => {


    return (
        <div className='grid wide'>
            <div className='row'>
                {
                products.map(product => (
                    <div className='col l-3'>
                        <img src={product.img}></img>
                        <h4>{product.title}</h4>
                        <h4>{product.price}</h4>
                        <button>Mua</button>
                    </div>

                ))
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
    return{
        addTocart: () => dispatch(addTocart())
    }
}

export default connect(mapStatetoProp)(Product);