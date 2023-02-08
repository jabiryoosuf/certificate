import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosApi } from "./axios-method";


export const StudentsApi = createAsyncThunk("students/StudentsApi",async () => {
    const result = await axiosApi.get("/student/student/");
    console.log(result.data);
    return result.data;
  }
);


const initialState = {
    allStudents:[],
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
  },
});

export default studentSlice.reducer;
