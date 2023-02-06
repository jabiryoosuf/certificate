import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginApi = createAsyncThunk("login/loginApi", async (input) => {
  const result = await axios.post(
    "https://api.certificates.edisonvalley.com/api/v1/account/login/",input.login);
  console.log(result);
  if (result?.data?.token) {
    localStorage.setItem("token", result.data.token);
    input.navigate('/dashboard')
  }
  return result.data;
});

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
  },
});

export default loginSlice.reducer;
