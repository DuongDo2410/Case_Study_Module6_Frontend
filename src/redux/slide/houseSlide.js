// fulfilled
// rejected
// pending
// idle

import { createSlice } from "@reduxjs/toolkit";
import {getAllHouse} from "../actionThunk/houseActionThunk";
const houseSlide = createSlice({
  name: "house",
  initialState: {
    houses: [],
    status: "idle",
    house: {},
  },
  reducers: {},
  extraReducers: (builder) => {
      builder
          .addCase(getAllHouse.fulfilled, (state, action) => {
            state.houses = action.payload;
            state.status = 'fulfilled';
          })
          .addCase(getAllHouse.pending, (state, action) => {
            state.status = 'pending';
          })
          .addCase(getAllHouse.rejected, (state, action) => {
            state.status = 'rejected';
          })

  },
});
export default houseSlide;
