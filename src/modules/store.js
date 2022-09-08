import { configureStore } from "@reduxjs/toolkit";
import moneySlice from "../redux/moneySlice";
import basketSlice from "../redux/basketSlice";
import productSlice from "../redux/productSlice";
import changeThemeSlice from "../redux/changeThemeSlice";

export default configureStore({
    reducer:{
        money: moneySlice,
        basket: basketSlice,
        products: productSlice,
        dark: changeThemeSlice
    }
})