import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosApi } from "./axios-method";


export const StudentsApi = createAsyncThunk("students/StudentsApi",async () => {
    const result = await axiosApi.get("/student/student/");
    console.log(result.data);
    return result.data;
  }
);
export const createstudentApi = createAsyncThunk("students/createstudentApi",async({input,navigate})=>{
  const result = await axiosApi.post("/student/student/",input)
  navigate('/allstudents')
})
export const viewstudentApi = createAsyncThunk("students/viewstudentApi",async({studentid})=>{
  const result = await axiosApi.get(`/student/student/${studentid}`)
  return result.data
})


const initialState = {
    allStudents:[],
    createStudent:{},
    viewStudent:{},
  };
const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: {
    [StudentsApi.pending]: (state, action) => {
      console.log("pending");
    },
    [StudentsApi.fulfilled]: (state , action) => {
      state.allStudents=action.payload
      
      console.log(" fullfilled");
    },
    [StudentsApi.rejected]: (state, action) => {
      console.log(" rejected");
    },
    [createstudentApi.pending]: (state, action) => {
      console.log("pending");
    },
    [createstudentApi.fulfilled]: (state , action) => {
      state.createStudent=action.payload
      
      console.log(" fullfilled");
    },
    [createstudentApi.rejected]: (state, action) => {
      console.log(" rejected");
    },
    [viewstudentApi.pending]: (state, action) => {
      console.log("pending");
    },
    [viewstudentApi.fulfilled]: (state , action) => {
      state.viewStudent = action.payload
      
      console.log(" fullfilled");
    },
    [viewstudentApi.rejected]: (state, action) => {
      console.log(" rejected");
    },
  },
});

export default studentSlice.reducer;
