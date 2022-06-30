import { GET_PRODUCTS } from "../Constants/ProductConstants";

const initialState = {
    products: {}
}


export const getProductsReducer = (state = initialState,action) =>{
    switch (action.type) {
        case GET_PRODUCTS:
        return{
            ...state,
            products: action.payload
        }
        default:
            return state;
    }
}