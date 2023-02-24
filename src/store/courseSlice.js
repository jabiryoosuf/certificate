import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosApi } from "./axios-method";


export const courseApi = createAsyncThunk('course/courseApi',async()=>{
    const result =await axiosApi.get("/course/course")
    console.log(result.data);
    return result.data;

});
export const createscourseApi = createAsyncThunk("course/createcoursApi", async (input)=>{
  console.log(input.course);
   await axiosApi.post("/course/course/", input.course);
 
  input.navigate('/course')

})
export const deletecourseApi = createAsyncThunk ("course/deletecourseApi",async(courseId)=>{
   await axiosApi.delete( `/course/course/${courseId}`);
  
})
export const singleviewcourseApi = createAsyncThunk ("course/singleviewcourseApi",async({courseId})=>{
  const result =await axiosApi.get(`/course/course/${courseId}`);
  console.log(result);
  return result.data
})
export const updatecourseApi = createAsyncThunk ("course/updatecourseApi",async({course,navigate,courseId})=>{
  const result = await axiosApi.put(`/course/course/${courseId}`, course);
  console.log(result);
  navigate('/course')
  
})

const initialState ={
    allcourse:[],
    createCourse:{},
    deletecourse:{},
    viewcourse:{},
    updatecourse:{}
}

const courseSlice = createSlice({
    name:"course",
    initialState,
    reducers:{},
    extraReducers:{
        [courseApi.pending]: (state , action) => {
        console.log("pending");
    },
    [courseApi.fulfilled]: (state , action) => {
      state.allcourse=action.payload
      
      console.log(" fullfilled");
    },
    [courseApi.rejected]: (state, action) => {
      console.log(" rejected");
    },
    [createscourseApi.fulfilled]:(state , action)=>{
      console.log("pending");
    },
    [createscourseApi.pending]:(state ,action)=>{
      state.createCourse = action.payload
      console.log("fullfilled");
    },
    [createscourseApi.rejected]:(state , action)=>{
      console.log("rejected");
    },
    [deletecourseApi.pending]:(state , action)=>{
      console.log("pending");
    },
    [deletecourseApi.fulfilled]:(state,action)=>{
      state.deletecourse = action.payload;
      console.log("fullfilled")
    },
    [deletecourseApi.rejected]:(state,action)=>{
      console.log("rejected");
    },
    [singleviewcourseApi.pending]:(state,action)=>{
      console.log("pending");
    },
    [singleviewcourseApi.fulfilled]:(state,action)=>{
      state.viewcourse = action.payload;
      console.log("fullfilled")
    },
    [singleviewcourseApi.rejected]:(state,action)=>{
      console.log("rejected")
    },
    [updatecourseApi.pending]:(state,action)=>{
      console.log("pending");
    },
    [updatecourseApi.fulfilled]:(state,action)=>{
      state.updatecourse = action.payload;
      console.log("fullfilled");
    },
    [updatecourseApi.rejected]:(state,action)=>{
      console.log("rejected");
    }

    }
})
export default courseSlice.reducer