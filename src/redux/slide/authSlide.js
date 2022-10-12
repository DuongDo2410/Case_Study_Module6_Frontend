import { createSlice } from "@reduxjs/toolkit";
import {
  loginAction,
  registerAction, setStatusAuthAction,
} from "../actionThunk/authActionThunk";
import {openNotificationWithIcon} from "../../components/Notification/NotificationWithIcon";
import userSlide from "./userSlide";
import {loginGoogleAction} from "../actionThunk/userActionThunk";
const authSlide = createSlice({
  name: "auth",
  initialState: {
    status: "idle",
    accessToken: null,
    user: JSON.parse(localStorage.getItem("currentUser")) || {},
  },
  reducers: {
    setStatusUserActionPending(state) {
      state.status = "pending"
    },
    setStatusUserActionIdle(state) {
      state.status = "idle"
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerAction.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(registerAction.fulfilled, (state, action) => {
      state.status = "fulfilled";
      openNotificationWithIcon({type: "success", message: "Đăng Kí Thành Công!!"})
    });
    builder.addCase(registerAction.rejected, (state, action) => {
      state.status = "rejected";
    });
    //Login
    builder.addCase(loginAction.rejected, (state, action) => {
      state.status = "rejected";
    });
    builder.addCase(loginAction.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.user = action.payload.user;
      localStorage.setItem("accessToken", action.payload.token);
      localStorage.setItem('currentUser', JSON.stringify(action.payload.user));
    });
    //LoginGoogle
    builder.addCase(loginGoogleAction.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(loginGoogleAction.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.user = action.payload.user;
      openNotificationWithIcon({type: "success", message: "Thành Công!"})
      localStorage.setItem('accessToken', action.payload.token);
      localStorage.setItem('currentUser', JSON.stringify(action.payload.user));
    });
  },
});
export const {setStatusUserActionPending, setStatusUserActionIdle} = authSlide.actions
export default authSlide;
