import React from 'react';
import { connect } from "react-redux"



const Product = ({products}) => {
   

    return (
        < >
            {
                products.map(product =>(
                    <div>
                        <h4>{product.title}</h4>
                        <h4>{product.price}</h4>

                    </div>

                ))
            }
        </>
    );
};

const mapStatetoProp = state => {
    return{
        products:state.shop.products,
    }
}


export default connect(mapStatetoProp)( Product);