// fulfilled
// rejected
// pending
// idle

import { createSlice } from "@reduxjs/toolkit";
import {
  createHouse,
  getAllHouse, getHistory,
  getOne, search,
  setStatusHouseAction,
    ratingHouse
} from "../actionThunk/houseActionThunk";
const houseSlide = createSlice({
  name: "house",
  initialState: {
    houses: [],
    status: "idle",
    house: null,
    history:[],
    houseSearch:[],
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
            //   .addCase(createHouse.pending, (state, action) => {
            //     state.status = "pending";
            //   })
            //   .addCase(createHouse.rejected, (state, action) => {
            //     state.status = "rejected";
            //   })
            //   .addCase(createHouse.fulfilled, (state, action) => {
            //     state.houses = action.payload;
            //     state.status = "fulfilled";
            //   })
            //get History
            .addCase(getHistory.fulfilled, (state, action) => {
                state.history = action.payload;
                state.status = "fulfilled";
            })
             .addCase(ratingHouse.fulfilled, (state, action) => {
                state.house.rating = action.payload
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
                state.houseSearch = action.payload
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
            })
    },
});
export default houseSlide;
