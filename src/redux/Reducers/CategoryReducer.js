import { GET_CATEGORIES } from './../Constants/CategoryConstant';


export const CategoryReducer = (state ={categories : []}, action) =>{
    switch (action.type) {
        case GET_CATEGORIES:
            return{
                ...state, 
                categories: action.payload
            }
        default:
            return state;
    }
}