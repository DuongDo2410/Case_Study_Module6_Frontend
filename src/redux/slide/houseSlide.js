// fulfilled
// rejected
// pending
// idle

import { createSlice } from "@reduxjs/toolkit";
import {
    getAllHouse, getHistory,
    getOne, search, createHouse, getTop5
} from "../actionThunk/houseActionThunk";
import {openNotificationWithIcon} from "../../components/Notification/NotificationWithIcon";


const houseSlide = createSlice({
  name: "house",
  initialState: {
    houses: [],
    totalPage: 0,
    topHouse: [],
    status: "idle",
    house: null,
    history:[],
    houseSearch:[],
  },
    reducers: {
        setStatusUserActionPending(state) {
            state.status = "pending"
        },
        setStatusUserActionIdle(state) {
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
                state.houses = action.payload.homes;
                state.totalPage = action.payload.totalPage;
                state.status = "fulfilled";
            })
            //get One
            .addCase(createHouse.fulfilled, (state, action) => {
                state.house = action.payload.checkHome;
                state.status = "fulfilled";
            })
            .addCase(createHouse.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(createHouse.rejected, (state, action) => {
                state.status = "rejected";
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
            //search
            .addCase(search.fulfilled, (state, action) => {
                state.houseSearch = action.payload
                state.status = "fulfilled";
                openNotificationWithIcon({type: "success", message: "Thành Công!"})
            })
            .addCase(search.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(search.rejected, (state, action) => {
                state.status = "rejected";
            })
            // addHouse
            .addCase(getOne.fulfilled, (state, action) => {
                state.status = "fulfilled";
            })
            .addCase(getOne.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(getOne.rejected, (state, action) => {
                state.status = "rejected";
            })
            // getTop5
            .addCase(getTop5.fulfilled, (state, action) => {
                state.topHouse = action.payload
                state.status = "fulfilled";
            })
            .addCase(getTop5.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(getTop5.rejected, (state, action) => {
                state.status = "rejected";
            })
    },
});
export const {setStatusUserActionPending, setStatusUserActionIdle} = houseSlide.actions

export default houseSlide;
