import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./loginSlice";
import studentReducer from "./studentSlice";
import courseReducer from "./courseSlice";
import CourseCategoryReducer from "./coursecategorySlice";
export const store = configureStore({
    reducer: {
         Auth:AuthReducer,
         students:studentReducer,
         course:courseReducer,
         category:CourseCategoryReducer
    },
})