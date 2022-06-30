import { BASE_URL } from "../../api/Config"
import { GET_ORDERS } from './../Constants/OrderConstants';

export const getOrderAction = (id) => async (dispatch,getState) =>{
    var orderList = await (await fetch(`${BASE_URL}Order/getall/${id}`)).json()
    console.log(orderList);
    dispatch({
        type: GET_ORDERS,
        payload: orderList.message
    })
}
