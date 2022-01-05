import React from 'react';

function Cartitem(id,img,) {
    return (
        <div>
            <div className='col l-3'>
                <img src={img}></img>
                <h4>{title}</h4>
                <h4>{price}</h4>
                <button >View Item</button>
                <button onClick={() => Addtocart(id)}>Mua</button>
            </div>
        </div>
    );
}

export default Cartitem;