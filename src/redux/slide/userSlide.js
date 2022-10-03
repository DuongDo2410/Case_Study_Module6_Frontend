import { createSlice } from "@reduxjs/toolkit";
import { getUserById, updateUserAction } from "../actionThunk/userActionThunk";
const userSlide = createSlice({
  name: "auth",
  initialState: {
    status: "idle",
    user: null,
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
  },
});
export default userSlide;
