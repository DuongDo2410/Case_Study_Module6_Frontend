import { createAsyncThunk } from "@reduxjs/toolkit";
import houseApi from "../../api/house.api";

export const getAllHouse = createAsyncThunk(
  "house/getAll",
  async () => {
      console.log('vào thunk')
    const { data } = await houseApi.getAll();
    return data;
  }
);
export const createHouse = createAsyncThunk(
  "house/create",
  async (house) => {
    const { data } = await houseApi.create(house);
    return data;
  }
);
