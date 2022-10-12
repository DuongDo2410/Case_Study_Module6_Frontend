import { createSlice } from "@reduxjs/toolkit";
import {
  loginAction,
  registerAction,
} from "../actionThunk/authActionThunk";
import {openNotificationWithIcon} from "../../components/Notification/NotificationWithIcon";
import {loginGoogleAction, updateUserAction} from "../actionThunk/userActionThunk";
const authSlide = createSlice({
  name: "auth",
  initialState: {
    status: "idle",
    accessToken: null,
    user: JSON.parse(localStorage.getItem("currentUser")) || {},
  },
  reducers: {
    setStatusAuthActionPending(state) {
      state.status = "pending"
    },
    setStatusAuthActionIdle(state) {
      state.status = "idle"
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerAction.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(registerAction.fulfilled, (state, action) => {
      openNotificationWithIcon({type: "success", message: "Đăng Kí Thành Công!!"})
      state.status = "fulfilled";
    });
    builder.addCase(registerAction.rejected, (state, action) => {
      state.status = "rejected";
    });
    //Login
    builder.addCase(loginAction.rejected, (state, action) => {
      state.status = "rejected";
      openNotificationWithIcon({type: "error", message: "Tài Khoản Hoặc Mật Khẩu Sai!"})
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
    //update User
    builder.addCase(updateUserAction.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(updateUserAction.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.user = action.payload;
      localStorage.removeItem("currentUser");
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
      openNotificationWithIcon({type: "success", message: 'Cập Nhật Thành Công'});
    });
  },
});
export const {setStatusAuthActionPending, setStatusAuthActionIdle} = authSlide.actions
export default authSlide;
