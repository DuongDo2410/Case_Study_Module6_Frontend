import { createSlice } from "@reduxjs/toolkit";
import {
  changePasswordAction,
  getUserById,
  updateUserAction,
} from "../actionThunk/userActionThunk";
const userSlide = createSlice({
  name: "user",
  initialState: {
    status: "idle",
    user: {}
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
    });
    builder.addCase(changePasswordAction.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(changePasswordAction.fulfilled, (state, action) => {
      state.status = "fulfilled";
    });
  },
});
export default userSlide;
