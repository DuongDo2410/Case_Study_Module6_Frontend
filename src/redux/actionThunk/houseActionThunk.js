import { createAsyncThunk } from "@reduxjs/toolkit";
import houseApi from "../../api/house.api";

export const getAllHouse = createAsyncThunk("house/getAll", async () => {
  const { data } = await houseApi.getAll();
  return data;
});
export const getHouseByUser = createAsyncThunk(
  "house/getHouseByUser",
  async () => {
    const { data } = await houseApi.getHouseByUser();
    return data;
  }
);
export const getHouseById = createAsyncThunk(
  "house/getHouseById",
  async (id) => {
    const { data } = await houseApi.getHouseById(id);
    return data;
  }
);
export const createHouse = createAsyncThunk("house/create", async (house) => {
  const { data } = await houseApi.create(house);
  return data;
});
export const getOne = createAsyncThunk("house/getOne", async (id) => {
  const { data } = await houseApi.getOne(id);
  return data;
});

export const setStatusHouseAction = createAsyncThunk(
  "auth/setStatus",
  async () => {}
);

export const getHistory = createAsyncThunk("house/history", async () => {
  console.log("vào thunk");
  const { data } = await houseApi.getHistory();
  console.log(data.bookings);
  return data.bookings;
});

export const search = createAsyncThunk("house/search", async (values) => {
  const { data } = await houseApi.search(values);
  return data;
});
