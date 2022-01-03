import * as actionTypes from "./actions-type";


const Initstate = {
    product:[],
    cart:[],
    currentItem: null,
}

const CReducer = (state,action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return{

            }
        case actionTypes.REMOVE_FROM_CART:
        return{
            
        }
        case actionTypes.QUANTITY:
            return{
                
            } 
        case actionTypes.LOAD_CURRENT_ITEM:
            return{
                
            }   
        default:
            return state;
    }
}
export default Reducer;