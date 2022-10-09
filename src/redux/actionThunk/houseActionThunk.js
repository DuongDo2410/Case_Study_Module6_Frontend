import { createAsyncThunk } from "@reduxjs/toolkit";
import houseApi from "../../api/house.api";

export const getAllHouse = createAsyncThunk("house/getAll", async () => {
  const { data } = await houseApi.getAll();
  return data;
});
export const createHouse = createAsyncThunk("house/create", async (house) => {
  const { data } = await houseApi.create(house);
  return data;
});
export const getOne = createAsyncThunk("house/create", async (id) => {
  const { data } = await houseApi.getOne(id);
  return data;
});

export const ratingHouse = createAsyncThunk("house/rating", async ({id, rating}) => {
  await houseApi.ratingHouse({id, rating});
  return rating;
});

export const setStatusHouseAction = createAsyncThunk(
  "auth/setStatus",
  async () => {}
);

export const getHistory = createAsyncThunk("house/history", async () => {
  const { data } = await houseApi.getHistory();
  return data.bookings;
});

export const search = createAsyncThunk(
  "house/search",
  async (values) => {
      const {data} = await houseApi.search(values);
      return data
  }
);
