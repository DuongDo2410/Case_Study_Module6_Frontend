import { createAsyncThunk } from "@reduxjs/toolkit";
import houseApi from "../../api/house.api";

export const getAllHouse = createAsyncThunk("house/getAll", async () => {
  const { data } = await houseApi.getAll();
  return data;
});
export const getTop5 = createAsyncThunk("house/topHouse", async () => {
  const { data } = await houseApi.getTop5();
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
export const updateHouse = createAsyncThunk("house/update", async (props) => {
  const { data } = await houseApi.update(props);
  return data;
});
export const getOne = createAsyncThunk("house/getOne", async (id) => {
  const { data } = await houseApi.getOne(id);
  return data;
});

export const ratingHouse = createAsyncThunk("rating", async ({id, rating, idUser}) => {
  await houseApi.ratingHouse({id, rating, idUser});
  return rating;
});


export const updateComment  = createAsyncThunk(
    'house/comments',
    async ({id, comment}) => {
      const {data} = await houseApi.updateComment({id: id, comment: comment});
        console.log(data)
      return data;
    }
)

export const setStatusHouseAction = createAsyncThunk(
  "auth/setStatus",
  async () => {}
);

export const getHistory = createAsyncThunk("house/history", async () => {
  const { data } = await houseApi.getHistory();
  console.log(data.bookings);
  return data.bookings;
});

export const search = createAsyncThunk("house/search", async (values) => {
  const { data } = await houseApi.search(values);
  return data;
});
export const deleteHome = createAsyncThunk("house/delete", async (id) => {
  await houseApi.deleteHome(id);
  return id;
});
