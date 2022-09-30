import { configureStore } from "@reduxjs/toolkit";
import houseSlide from "./slide/houseSlide";

const store = configureStore({
  reducer: {
    house: houseSlide.reducer,
  },
});
export default store;
