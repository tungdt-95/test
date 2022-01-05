import React from 'react';
import { Link } from "react-router-dom";
import {Addtocart} from "../redux/actions/actions"
import { connect } from "react-redux";

const Product = ({img,title,price,Addtocart}) => {
    return (
        <div className='col l-3'>
            <img src={img}></img>
            <h4>{title}</h4>
            <h4>{price}</h4>
            <Link to="/product/someID">
                <button >View Item</button>
            </Link>
            <Link>
                <button onC>Mua</button>
            </Link>
        </div>
    );
};
const mapdispatchtoprop = dispatch => {
    return {
        Addtocart: (id) => dispatch(Addtocart(id))
    }
}
export default connect( mapdispatchtoprop )(Product);
