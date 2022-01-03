import React from 'react';
import { connect } from "react-redux"
import {Addtocart} from "../redux/actions/actions"

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
                        <button onClick={() => Addtocart(product.id)}>Mua</button>
                    </div>

                ))
            }
            </div>
          
        </div>
    );
};


const mapdispatchtoprop = dispatch => {
    return{
        Addtocart: (id) => dispatch(Addtocart(id))
    }
}

export default connect(mapStatetoProp,mapdispatchtoprop)(Product);