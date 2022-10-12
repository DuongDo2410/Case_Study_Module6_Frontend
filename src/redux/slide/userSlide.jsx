import { createSlice } from "@reduxjs/toolkit";
import {
  changePasswordAction,
  getUserById,
    getStatistic
} from "../actionThunk/userActionThunk";
import { setLocale } from "yup";
import {openNotificationWithIcon} from "../../components/Notification/NotificationWithIcon";
import booking from "../../pages/booking/booking";


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
    //change Password
    builder.addCase(changePasswordAction.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(changePasswordAction.fulfilled, (state, action) => {
      state.status = "fulfilled";
      openNotificationWithIcon({type: "success", message: 'Thành Công'});
    });
    //getStatistic
    builder.addCase(getStatistic.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(getStatistic.fulfilled, (state, action) => {
      console.log('lôiioio', action.payload)
      state.bookings = action.payload.bookings;
      state.statistic.week = action.payload.moneyWeek;
      state.statistic.month = action.payload.moneyMonth
    });
    builder.addCase(getStatistic.rejected, (state, action) => {
      state.status = "rejected";
    });
  },
});
export const {setStatusUserActionPending, setStatusUserActionIdle} = userSlide.actions
export default userSlide;
