import { createSlice } from "@reduxjs/toolkit";
import { registerAction } from "../actionThunk/houseActionThunk";
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
  },
});
export default authSlide;
