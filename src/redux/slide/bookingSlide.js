import { createSlice } from "@reduxjs/toolkit";
import {
  bookingAcceptAction,
  bookingAcceptOwnerAction,
  bookingAction,
  bookingPendingAction,
} from "../actionThunk/bookingActionThunk";

const bookingSlide = createSlice({
  name: "booking",
  initialState: {
    status: "idle",
    booking: [],
    bookingPending: [],
    bookingAccept: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(bookingAction.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(bookingAction.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.booking = action.payload;
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
      state.bookingAccept = action.payload.bookings;
    });
    builder.addCase(bookingAcceptAction.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(bookingAcceptAction.fulfilled, (state, action) => {
      state.status = "fulfilled";
      console.log("slide", action.payload);
      state.bookingPending = state.bookingPending.filter((booking) =>
        booking._id != action.payload.idBooking ? booking._id : ""
      );
      state.bookingAccept.push(action.payload.booking);
    });
  },
});
export default bookingSlide;
