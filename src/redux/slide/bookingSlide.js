import { createSlice } from "@reduxjs/toolkit";
import {
  bookingAcceptAction,
  bookingAcceptOwnerAction,
  bookingAction,
  bookingPendingAction,
  bookingSuccessOwnerAction,
  getBookingAction,
  getbookingSuccessOwnerAction,
} from "../actionThunk/bookingActionThunk";
import { openNotificationWithIcon } from "../../components/Notification/NotificationWithIcon";
import userSlide from "./userSlide";

const bookingSlide = createSlice({
  name: "booking",
  initialState: {
    status: "idle",
    booking: [],
    bookingOwner: [],
    bookingPending: [],
    bookingAccept: [],
    bookingSuccess: [],
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
    builder.addCase(bookingSuccessOwnerAction.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(bookingSuccessOwnerAction.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.bookingAccept = state.bookingAccept.filter((booking) =>
        booking._id != action.payload._id ? booking._id : ""
      );
      state.bookingSuccess.push(action.payload);
    });
    builder.addCase(bookingAction.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(bookingAction.fulfilled, (state, action) => {
      state.status = "fulfilled";
      openNotificationWithIcon({ type: "success", message: "Thành Công!" });
      state.booking = action.payload;
    });
    builder.addCase(getBookingAction.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(getBookingAction.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.bookingOwner = action.payload;
    });
    builder.addCase(bookingPendingAction.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(bookingPendingAction.fulfilled, (state, action) => {
      state.status = "fulfilled";
      openNotificationWithIcon({ type: "success", message: "Thành Công!" });
      state.bookingPending = action.payload.bookings;
    });
    builder.addCase(bookingAcceptOwnerAction.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(bookingAcceptOwnerAction.fulfilled, (state, action) => {
      state.status = "fulfilled";
      console.log("slide", action.payload);
      state.bookingAccept = action.payload;
    });
    builder.addCase(bookingAcceptAction.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(bookingAcceptAction.fulfilled, (state, action) => {
      state.status = "fulfilled";
      openNotificationWithIcon({ type: "success", message: "Thành Công!" });
      state.bookingPending = state.bookingPending.filter((booking) =>
        booking._id != action.payload.idBooking ? booking._id : ""
      );
      state.bookingAccept.push(action.payload.booking);
    });
    builder.addCase(getbookingSuccessOwnerAction.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(getbookingSuccessOwnerAction.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.bookingSuccess = action.payload;
    });
  },
});
export const { setStatusUserActionPending, setStatusUserActionIdle } =
  bookingSlide.actions;

export default bookingSlide;
