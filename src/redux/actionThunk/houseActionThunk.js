import { createAsyncThunk } from "@reduxjs/toolkit";
import houseApi from "../../api/house.api";

export const registerAction = createAsyncThunk(
  "house/create",
  async (house) => {
    const { data } = await houseApi.create(house);
    return data;
  }
);
