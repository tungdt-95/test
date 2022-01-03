import React from 'react';
import { connect } from "react-redux"


const Product = ({ products }) => {


    return (
        <div>
            {
                products.map(product => (
                    <div>
 <div className='row'>
                        <div className='col l-3'>
                            <h4>{product.title}</h4>
                            <h4>{product.price}</h4>
                        </div>


                    </div>
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