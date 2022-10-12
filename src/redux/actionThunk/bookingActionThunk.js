import { createAsyncThunk } from "@reduxjs/toolkit";
import bookingApi from "../../api/booking.api";

export const bookingAction = createAsyncThunk(
  "booking/create",
  async (payload) => {
    let token = localStorage.getItem("accessToken");
    const { data } = await bookingApi.booking(payload, token);
    return data;
  }
);
export const getBookingAction = createAsyncThunk("booking/getAll", async () => {
  const { data } = await bookingApi.getBooking();
  return data;
});
export const bookingPendingAction = createAsyncThunk(
  "booking/pending",
  async () => {
    let token = localStorage.getItem("accessToken");
    const { data } = await bookingApi.bookingPending(token);
    return data;
  }
);
export const bookingAcceptAction = createAsyncThunk(
  "booking/accept",
  async (payload) => {
    let token = localStorage.getItem("accessToken");
    let { data } = await bookingApi.bookingAccept(
      payload.idHome,
      payload.idBooking,
      token
    );
    return {
      idBooking: payload.idBooking,
      booking: data.booking,
    };
  }
);
export const bookingAcceptOwnerAction = createAsyncThunk(
  "booking/acceptOwner",
  async (payload) => {
    let token = localStorage.getItem("accessToken");
    const { data } = await bookingApi.bookingActionOwner(token);
    return data.bookings;
  }
);
export const getbookingSuccessOwnerAction = createAsyncThunk(
  "booking/getbookingSuccessOwner",
  async (payload) => {
    const { data } = await bookingApi.getBookingSuccessOwner();
    return data.bookings;
  }
);
export const bookingSuccessOwnerAction = createAsyncThunk(
  "booking/bookingSuccessOwner",
  async (id) => {
    const { data } = await bookingApi.BookingSuccessOwner(id);

    return data.booking;
  }
);
