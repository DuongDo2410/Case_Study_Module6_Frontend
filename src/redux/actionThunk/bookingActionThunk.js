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
    console.log("thunk", payload);
    await bookingApi.bookingAccept(payload.idHome, payload.idBooking, token);
    return payload.idBooking;
  }
);
