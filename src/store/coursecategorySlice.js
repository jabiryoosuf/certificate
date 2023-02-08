import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosApi } from "./axios-method";

export const coursecategoryApi = createAsyncThunk("category/coursecategoryApi",async ()=>{
    const result =await axiosApi.get("/course/course_category/")
    console.log(result);
    return result.data;
})
 const initialState={
    allcategory:[]
 }

const CoursecategorySlice=createSlice({
    name:"category",
    initialState,
    reducers:{},
    extraReducers:{
        [coursecategoryApi.pending]: (state, action) => {
            console.log("pending");
          },
          [coursecategoryApi.fulfilled]: (state,action) => {
            state.allcategory = action.payload
            
            console.log(" fullfilled");
          },
          [coursecategoryApi.rejected]: (state, action) => {
            console.log(" rejected");
          },
    }
})
export default CoursecategorySlice.reducer