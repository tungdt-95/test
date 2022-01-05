import React from 'react';

function Cartitem(img,title,price) {
    return (
        <div>
            <div className='col l-3'>
                <img src={img}></img>
                <h4>{title}</h4>
                <h4>{price}</h4>
            </div>
        </div>
    );
}

export default Cartitem;