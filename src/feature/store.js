import { configureStore } from "@reduxjs/toolkit";
import parathaReducer from "./Paratha/parathaSlice"
import CardReducer from "./Card/CardSlice"
import AuthReducer from "./auth/AuthSlice"
const store = configureStore({
    reducer: {

        paratha: parathaReducer,
        cards: CardReducer,
        auth:AuthReducer
    }
})
export default store