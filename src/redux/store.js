import { configureStore } from "@reduxjs/toolkit";
import houseSlide from "./slide/houseSlide";
import userSlide from "./slide/userSlide";

const store = configureStore({
  reducer: {
    house: houseSlide.reducer,
    user: userSlide.reducer,
  },
});
export default store;
