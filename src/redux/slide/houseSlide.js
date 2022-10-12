// fulfilled
// rejected
// pending
// idle

import { createSlice } from "@reduxjs/toolkit";
import {
  createHouse,
  getAllHouse,
  getHistory,
  getHouseById,
  getHouseByUser,
  getOne,
  search,
  setStatusHouseAction,
} from "../actionThunk/houseActionThunk";
const houseSlide = createSlice({
  name: "house",
  initialState: {
    houses: [],
    customerHouse: [],
    status: "idle",
    house: null,
    history: [],
    houseSearch: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllHouse.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getAllHouse.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(getAllHouse.fulfilled, (state, action) => {
        state.houses = action.payload;
        state.status = "fulfilled";
      })
      .addCase(getHouseByUser.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getHouseByUser.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(getHouseByUser.fulfilled, (state, action) => {
        state.customerHouse = action.payload;
        state.status = "fulfilled";
      })
      .addCase(getHouseById.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getHouseById.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(getHouseById.fulfilled, (state, action) => {
        // state.houses = state.houses.map((house) =>
        //   house._id == action.payload._id ? action.payload : house
        // );
        state.house = action.payload;
        state.status = "fulfilled";
      })
      .addCase(createHouse.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(createHouse.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(createHouse.fulfilled, (state, action) => {
        state.houses.push(action.payload);
        state.status = "fulfilled";
      })
      //get History
      .addCase(getHistory.fulfilled, (state, action) => {
        state.history = action.payload;
        state.status = "fulfilled";
      })
      .addCase(getHistory.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getHistory.rejected, (state, action) => {
        state.status = "rejected";
      })
      //get One
      .addCase(getOne.fulfilled, (state, action) => {
        state.house = action.payload.checkHome;
        state.status = "fulfilled";
      })
      .addCase(getOne.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getOne.rejected, (state, action) => {
        state.status = "rejected";
      })
      //search
      .addCase(search.fulfilled, (state, action) => {
        state.houseSearch = action.payload;
        state.status = "fulfilled";
      })
      .addCase(search.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(search.rejected, (state, action) => {
        state.status = "rejected";
      })
      //setStatus
      .addCase(setStatusHouseAction.fulfilled, (state, action) => {
        state.status = "idle";
      });
  },
});
export default houseSlide;
