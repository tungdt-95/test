import React from 'react';
import { connect } from "react-redux"


const Product = ({ products }) => {


    return (
        <div className='grid wide'>
            <div>
                <div></div>
            </div>
            {
                products.map(product => (
                    <div>
                        <img src={product.img}></img>
                        <h4>{product.title}</h4>
                        <h4>{product.price}</h4>
                        <button>Mua</button>
                    </div>

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


export default connect(mapStatetoProp)(Product);