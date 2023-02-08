import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosApi } from "./axios-method";
export const courseApi = createAsyncThunk('course/courseApi',async()=>{
    const result =await axiosApi.get("/course/course")
    console.log(result.data);
    return result.data;

});

const initialState ={
    allcourse:[]
}

const courseSlice = createSlice({
    name:"course",
    initialState,
    reducers:{},
    extraReducers:{
        [courseApi.fulfilled]: (state , action) => {
        console.log("pending");
    },
    [courseApi.fulfilled]: (state , action) => {
      state.allcourse=action.payload
      
      console.log(" fullfilled");
    },
    [courseApi.rejected]: (state, action) => {
      console.log(" rejected");
    },

    }
})
export default courseSlice.reducer