import * as actionTypes from "./actions-type";



export const Addtocart = (itemID) => {
    return {
        type:actionTypes.ADD_TO_CART,
        payload: {
            id: itemID
        }
    }
}



export const Removefromcart = (itemID) => {
    return {
        type:actionTypes.,
        payload: {
            id: itemID
        }
    }
}