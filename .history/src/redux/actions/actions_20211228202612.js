import * as actionTypes from "./actions-type";



export const Addtocart = (itemID) => {
    console.log('itemID')
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


export const Quantity = (itemID,value) => {
    return {
        type:actionTypes.QUANTITY,
        payload: {
            id: itemID,
            qty:value
        }
    }
}


export const LoadCurentItem = (itemID) => {
    return {
        type:actionTypes.LOAD_CURRENT_ITEM,
        payload: {
            id: itemID
        }
    }
}