import { createSlice } from "@reduxjs/toolkit";
import {
  loginAction,
  setStatusAction,
  registerAction,
} from "../actionThunk/authActionThunk";
const authSlide = createSlice({
  name: "auth",
  initialState: {
    status: "idle",
    accessToken: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerAction.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(registerAction.fulfilled, (state, action) => {
      state.status = "fulfilled";
    });
    builder.addCase(loginAction.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.status = "fulfilled";
      localStorage.setItem("accessToken", action.payload.token);
    });
    builder.addCase(setStatusAction.fulfilled, (state, action) => {
      state.status = "idle";
    });
  },
});
export default authSlide;
