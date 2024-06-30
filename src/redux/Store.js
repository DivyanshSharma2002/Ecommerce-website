import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./slices/CartSlice";

export const store=configureStore({
    reducer:{
        cart:Cartslice
    }
})