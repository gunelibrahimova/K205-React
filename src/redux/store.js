import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import { CartReducer } from "./Reducers/CartReducer";
import { addCheckOutReducer } from "./Reducers/CheckOutReducer";
import { getProductsReducer } from "./Reducers/ProductReducer";
import { UserReducer } from "./Reducers/UserReducer";
import { OrderReducer } from './Reducers/OrderReducer';
import { CategoryReducer } from "./Reducers/CategoryReducer";

const {default: thunk} = require("redux-thunk")

const reducer = combineReducers({
    products: getProductsReducer,
    cart: CartReducer,
    user: UserReducer,
    checkout: addCheckOutReducer,
    order: OrderReducer,
    category: CategoryReducer
})


const cartItemFromLocalStorage = localStorage.getItem("cartItems")
 ? JSON.parse(localStorage.getItem("cartItems")):[]

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
? JSON.parse(localStorage.getItem("userInfo")) : []

const initialState ={
    cart:{cartItems:cartItemFromLocalStorage},
    user: {userInfo: userInfoFromLocalStorage},
    checkout: {checkOut: []},
    order: {orderList : []},
    category: {categories : []}

}


const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
)


export default store;