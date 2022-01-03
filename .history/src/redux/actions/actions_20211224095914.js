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
        type:actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID
        }
    }
}


export const Quantity = (itemID) => {
    return {
        type:actionTypes.QUANTITY,
        payload: {
            id: itemID
        }
    }
}