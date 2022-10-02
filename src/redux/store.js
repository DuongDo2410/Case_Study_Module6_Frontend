import { configureStore } from "@reduxjs/toolkit";
import authSlide from "./slide/authSlide";
import houseSlide from "./slide/houseSlide";

const store = configureStore({
  reducer: {
    house: houseSlide.reducer,
    auth: authSlide.reducer,
  },
});
export default store;
