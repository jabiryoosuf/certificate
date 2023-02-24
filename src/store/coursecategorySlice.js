import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosApi } from "./axios-method";

export const coursecategoryApi = createAsyncThunk("category/coursecategoryApi",async ()=>{
    const result =await axiosApi.get("/course/course_category/")
    console.log(result);
    return result.data;
})
export const createcategoryApi = createAsyncThunk ("category/createcategoryApi",async(input)=>{
  const result = await axiosApi.post( "/course/course_category/",input.update)
  console.log(result);
  input.navigate('/Coursecategory')
  return result.data;
})
export const updatecoursecategoryApi = createAsyncThunk("category/updatecoursecategoryApi",async({category,navigate,courseCategoryId})=>{
  const result = await axiosApi.put(`/course/course_category/${courseCategoryId}`,category)
  console.log(result);
  navigate('/Coursecategory')

})
export const deletecoursecategoryapi = createAsyncThunk ("category/deletecoursecategoryapi",async({Id,navigate})=>{
  await axiosApi.delete(`/course/course_category/${Id}`)
  navigate('/Coursecategory')

})
export const singleviewcategoryApi = createAsyncThunk ("category/singleviewcategoryApi",async(courseCategoryId)=>{
  const result =await axiosApi.get(`/course/course_category/${courseCategoryId}`);
  console.log(result);
  return result.data
})
 const initialState={
    allcategory:[],
    createcategory:{},
    updatecategory:{},
    deletecategory:{},
    viewcategory:{}
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
          [createcategoryApi.pending]: (state, action) => {
            console.log("pending");
          },
          [createcategoryApi.fulfilled]: (state,action) => {
            state.createcategory = action.payload
            
            console.log(" fullfilled");
          },
          [createcategoryApi.rejected]: (state, action) => {
            console.log(" rejected");
          },



          [updatecoursecategoryApi.pending]:(state,action)=>{
            console.log("pending");
          },
          [updatecoursecategoryApi.fulfilled]:(state,action)=>{
            state.updatecategory = action.payload
            console.log("fulfilled");
          },
          [updatecoursecategoryApi.rejected]:(state,action)=>{
            console.log("rejected");
          },
          [deletecoursecategoryapi.pending]:(state,action)=>{
            console.log("pending");
          },
          [deletecoursecategoryapi.fulfilled]:(state,action)=>{
            state.deletecategory =action.payload
            console.log("fullfilled");
          },
          [deletecoursecategoryapi.rejected]:(state,action)=>{
            console.log("rejected");
          },


          [singleviewcategoryApi.pending]:(state,action)=>{
            console.log("pending");
          },
          [singleviewcategoryApi.fulfilled]:(state,action)=>{
            state.viewcategory =action.payload
            console.log("fullfilled");
          },
          [singleviewcategoryApi.rejected]:(state,action)=>{
            console.log("rejected");
          }

    }
})
export default CoursecategorySlice.reducer