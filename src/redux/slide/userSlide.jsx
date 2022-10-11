import { createSlice } from "@reduxjs/toolkit";
import {
  changePasswordAction,
  getUserById,
  loginGoogleAction,
  updateUserAction,
  setStatusUserAction,
} from "../actionThunk/userActionThunk";
import { setLocale } from "yup";
import {openNotificationWithIcon} from "../../components/Notification/NotificationWithIcon";


const userSlide = createSlice({
  name: "user",
  initialState: {
    status: "idle",
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
    builder.addCase(getUserById.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(getUserById.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.user = action.payload;
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
    //change Password
    builder.addCase(changePasswordAction.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(changePasswordAction.fulfilled, (state, action) => {
      state.status = "fulfilled";
      openNotificationWithIcon({type: "success", message: 'Thành Công'});
    });
    //login Google
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
    builder.addCase(loginGoogleAction.rejected, (state, action) => {
      state.status = "rejected";
    });
  },
});
export const {setStatusUserActionPending, setStatusUserActionIdle} = userSlide.actions
export default userSlide;
