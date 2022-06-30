import { GET_ORDERS } from './../Constants/OrderConstants';

export const OrderReducer = (state = {orderList: []},action) =>{
    switch (action.type) {
        case GET_ORDERS:
            return{
                ...state,
                orderList: action.payload
            }
        default:
            return state;
    }
}