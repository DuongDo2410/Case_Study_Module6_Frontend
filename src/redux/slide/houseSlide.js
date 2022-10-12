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
  deleteHome,
  updateHouse,
  ratingHouse,
  updateComment,
} from "../actionThunk/houseActionThunk";
import {openNotificationWithIcon} from "../../components/Notification/NotificationWithIcon";


const houseSlide = createSlice({
  name: "house",
  initialState: {
    houses: [],
    customerHouse: [],
    topHouse: [],
    status: "idle",
    house: null,
    history: [],
    houseSearch: [],
  },
  reducers: {
    setStatusHouseActionPending(state) {
      state.status = "pending"
    },
    setStatusHouseActionIdle(state) {
      state.status = "idle"
    },
  },
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
      //getHouseByUser
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
      //getHouseById
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
      //create House
      .addCase(createHouse.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(createHouse.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(createHouse.fulfilled, (state, action) => {
        state.houses.push(action.payload);
        openNotificationWithIcon({ type: "success", message: "Thành Công!" });
        state.status = "fulfilled";
      })
      //delete House
      .addCase(deleteHome.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(deleteHome.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(deleteHome.fulfilled, (state, action) => {
        openNotificationWithIcon({ type: "success", message: "Thành Công!" });
        state.status = "fulfilled";
        let newHouses = state.customerHouse.filter(
          (house) => house._id !== action.payload
        );
        state.customerHouse = newHouses;
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
      //Update house
      .addCase(updateHouse.fulfilled, (state, action) => {
        openNotificationWithIcon({ type: "success", message: "Thành Công!" });
        state.status = "fulfilled";
      })
      .addCase(updateHouse.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(updateHouse.rejected, (state, action) => {
        openNotificationWithIcon({ type: "error", message: "Thất Bại!" });
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
        openNotificationWithIcon({ type: "success", message: "Thành Công!" });
        state.status = "fulfilled";
      })
      .addCase(search.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(search.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(ratingHouse.fulfilled, (state, action) => {
        state.house.rating = action.payload;
      })
      .addCase(updateComment.fulfilled, (state, action) => {
        state.house = action.payload;
      });
  },
});
export const {setStatusHouseActionPending, setStatusHouseActionIdle} = houseSlide.actions

export default houseSlide;
