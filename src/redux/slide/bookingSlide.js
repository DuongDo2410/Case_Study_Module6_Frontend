import { createSlice } from "@reduxjs/toolkit";
import {
  bookingAcceptAction,
  bookingAcceptOwnerAction,
  bookingAction,
  bookingCanCelAction,
  bookingHistoryRenterAction,
  bookingPendingAction,
  bookingSuccessOwnerAction,
  getbookingAcceptRenterAction,
  getBookingAction,
  getbookingPendingRenterAction,
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
    bookingPendingRenter: [],
    bookingAcceptRenter: [],
    bookingHistoryRenter: [],
    bookingAccept: [],
    bookingSuccess: [],
  },
  reducers: {
    setStatusBookingActionPending(state) {
      state.status = "pending";
    },
    setStatusBookingActionIdle(state) {
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(bookingSuccessOwnerAction.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(bookingSuccessOwnerAction.fulfilled, (state, action) => {
      state.status = "fulfilled";
      openNotificationWithIcon({ type: "success", message: "Thành Công!" });
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
      state.bookingPending = action.payload.bookings;
    });
    builder.addCase(bookingAcceptOwnerAction.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(bookingAcceptOwnerAction.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.bookingAccept = action.payload;
    });
    builder.addCase(getbookingPendingRenterAction.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(
      getbookingPendingRenterAction.fulfilled,
      (state, action) => {
        state.status = "fulfilled";
        state.bookingPendingRenter = action.payload;
      }
    );
    builder.addCase(bookingHistoryRenterAction.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(bookingHistoryRenterAction.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.bookingHistoryRenter = action.payload;
    });
    builder.addCase(getbookingAcceptRenterAction.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(getbookingAcceptRenterAction.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.bookingAcceptRenter = action.payload;
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
    builder.addCase(bookingCanCelAction.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(bookingCanCelAction.rejected, (state, action) => {
      state.status = "rejected";
      console.log(action.payload);
      openNotificationWithIcon({
        type: "error",
        message: action.payload.message,
      });
    });
    builder.addCase(bookingCanCelAction.fulfilled, (state, action) => {
      state.status = "fulfilled";
      openNotificationWithIcon({ type: "success", message: "Thành Công!" });
      state.bookingPendingRenter = state.bookingPendingRenter.filter(
        (booking) => (booking._id != action.payload._id ? booking._id : "")
      );
    });
  },
});
export const { setStatusBookingActionPending, setStatusBookingActionIdle } =
  bookingSlide.actions;

export default bookingSlide;
