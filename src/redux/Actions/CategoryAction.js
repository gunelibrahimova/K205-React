import { BASE_URL } from "../../api/Config"
import { GET_CATEGORIES } from "../Constants/CategoryConstant"


export const getCategoriesAction = () =>async (dispatch, getstate)=>{
    var categories = await (await fetch(`${BASE_URL}Category/getall`)).json()
    
    dispatch({
        type:GET_CATEGORIES,
        payload:categories
    })
}