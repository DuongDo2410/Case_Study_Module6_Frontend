import { configureStore } from "@reduxjs/toolkit";
import authSlide from "./slide/authSlide";
// import houseSlide from "./slide/houseSlide";
import userSlide from "./slide/userSlide";

const store = configureStore({
  reducer: {
    // house: houseSlide.reducer,
    auth: authSlide.reducer,
    user: userSlide.reducer,
  },
});
export default store;
