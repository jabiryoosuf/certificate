import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./loginSlice";
export const store = configureStore({
    reducer: {
         Auth:AuthReducer,
    },
})