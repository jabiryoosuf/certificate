import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosApi } from "./axios-method";

export const loginApi = createAsyncThunk("login/loginApi", async (input) => {
  const result = await axiosApi.post("/account/login/",input.login);
  console.log(result);
  if (result?.data?.token) {
    localStorage.setItem("token", result.data.token);
    input.navigate('/dashboard')
  }
  return result.data;
});
export const logoutApi = createAsyncThunk("logout/logoutApi",async (input) =>{
    const token=localStorage.getItem("token")
    const result = await axiosApi.post(  "/account/logout/", token );
        localStorage.removeItem("token")
        input.navigate("/")
})

const initialState = {
  token: "",
};
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: {
    [loginApi.pending]: (state, action) => {
      console.log("login pending");
    },
    [loginApi.fulfilled]: (state, action) => {
      console.log("login fullfilled");
      state.token = action.payload.token;
    },
    [loginApi.rejected]: (state, action) => {
      console.log("login rejected");
    },
    [logoutApi.pending]: (state, action) => {
        console.log("logout pending");
    } ,
    [logoutApi.pending]: (state, action) => {
        console.log("logout fullfilled");
    } , 
    [logoutApi.pending]: (state, action) => {
        console.log("logout rejected");
},

  },
});


export default loginSlice.reducer;
