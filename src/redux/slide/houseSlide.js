// fulfilled
// rejected
// pending
// idle

import { createSlice } from "@reduxjs/toolkit";
import {
  createHouse,
  getAllHouse,
  getOne,
  setStatusHouseAction
} from "../actionThunk/houseActionThunk";
const houseSlide = createSlice({
  name: "house",
  initialState: {
    houses: [],
    status: "idle",
    house: null,
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
        //setStatus
        .addCase(setStatusHouseAction.fulfilled, (state, action) => {
          state.status = "idle";
        })

  },
});
export default houseSlide;
