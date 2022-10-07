import { createSlice } from "@reduxjs/toolkit";
import {
  changePasswordAction,
  getUserById,
  loginGoogleAction,
  updateUserAction,
} from "../actionThunk/userActionThunk";
import { setLocale } from "yup";
const userSlide = createSlice({
  name: "user",
  initialState: {
    status: "idle",
    user: JSON.parse(localStorage.getItem("currentUser")) || {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserById.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(getUserById.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.user = action.payload;
    });
    builder.addCase(updateUserAction.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(updateUserAction.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.user = action.payload;
      console.log("logggg", action.payload);
      localStorage.removeItem("currentUser");
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
    });
    builder.addCase(changePasswordAction.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(changePasswordAction.fulfilled, (state, action) => {
      state.status = "fulfilled";
    });
    builder.addCase(loginGoogleAction.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(loginGoogleAction.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.user = action.payload;
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
    });
    builder.addCase(loginGoogleAction.rejected, (state, action) => {
      state.status = "rejected";
    });
  },
});
export default userSlide;
