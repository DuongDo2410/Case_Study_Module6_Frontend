import { createSlice } from "@reduxjs/toolkit";
import {
  changePasswordAction,
  getUserById,
  loginGoogleAction,
  updateUserAction,
  setStatusUserAction,
  getStatistic,
} from "../actionThunk/userActionThunk";
import { setLocale } from "yup";
import booking from "../../pages/booking/booking";
import { openNotificationWithIcon } from "../../components/Notification/NotificationWithIcon";

const userSlide = createSlice({
  name: "user",
  initialState: {
    status: "idle",
    bookings: [],
    statistic: {
      week: 0,
      month: 0,
    },
  },
  reducers: {
    setStatusUserActionPending(state) {
      state.status = "pending";
    },
    setStatusUserActionIdle(state) {
      state.status = "idle";
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
      openNotificationWithIcon({
        type: "success",
        message: "Cập Nhật Thành Công",
      });
    });
    //change Password
    builder.addCase(changePasswordAction.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(changePasswordAction.fulfilled, (state, action) => {
      state.status = "fulfilled";
      openNotificationWithIcon({ type: "success", message: "Thành Công" });
    });
    //getStatistic
    builder.addCase(getStatistic.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(getStatistic.fulfilled, (state, action) => {
      state.status = "fulfilled";

      state.bookings = action.payload.bookings;
      state.statistic.week = action.payload.moneyWeek;
      state.statistic.month = action.payload.moneyMonth;
    });
    builder.addCase(getStatistic.rejected, (state, action) => {
      state.status = "rejected";
    });
  },
});
export const { setStatusUserActionPending, setStatusUserActionIdle } =
  userSlide.actions;
export default userSlide;
