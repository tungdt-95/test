import React from 'react';
import { connect } from "react-redux"


const Product = ({products}) => {
   

    return (
        <div className='grid wide'>
            {
                products.map(product =>(
                    <div className='row'>
                        <div className='col l-3'>

                        </div>
                       

                    </div>

                ))
            }
        </div>
    );
};

const mapStatetoProp = state => {
    return{
        products:state.shop.products,
    }
}


export default connect(mapStatetoProp)( Product);