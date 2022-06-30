import { BASE_URL } from "../../api/Config"
import { GET_PRODUCTS } from "../Constants/ProductConstants"



export const getProductsAction = () => async (dispach, getState) => {
    if (!Object.keys(getState().products.products).length) {
        const data = await (await fetch(`${BASE_URL}Product/productlist`)).json()
        dispach({
            type: GET_PRODUCTS,
            payload: data
        })
    }
}
