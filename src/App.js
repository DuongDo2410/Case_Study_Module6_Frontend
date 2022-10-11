import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./pages/home/home";
import { useDispatch, useSelector } from "react-redux";
import { getAllHouse } from "./redux/actionThunk/houseActionThunk";
import { useEffect } from "react";
import UpdateProfile from "./pages/userProfile/UpdateProfile";
import Booking from "./pages/booking/booking";
import { RegisterPage } from "./pages/Register/RegisterPage";
import { SignInPage } from "./pages/SignIn/SignInPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import RightContent from "./components/userProfile/content/RightContent";
import AddHouse from "./components/addHouse/addHouse";
import { ChangePassword } from "./components/changePassword/changePassword";
import {
  openNotificationWithIcon,
  loading,
} from "./components/Notification/NotificationWithIcon";
import HistoryRentHouse from "./components/history/HistoryRentHouse";
import Notification from "./components/Notification/Notification";
import BookingPending from "./components/bookingPending/BookingPending";
import HomeManagement from "./components/home-management";
import PendingBooking from "./components/home-management/pending-booking/pending-booking";
import Content from "./components/search/content";
import BookingAcceptOwner from "./components/home-management/accept-booking/accept-booking";
import Dasboard from "./pages/admin/dasboard";
import Statistical from "./pages/admin/statistical/statistical";
import Houses from "./pages/admin/house/houses";

function App() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllHouse());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/profile"} element={<UpdateProfile />}>
          <Route path={"/profile/:id"} element={<RightContent />} />
          <Route
            path={"/profile/changePassword"}
            element={<ChangePassword />}
          />
          <Route path={"/profile/history"} element={<HistoryRentHouse />} />

          <Route path={"/profile/house/list"} element={<HomeManagement />}>
            <Route path={"/profile/house/list/create"} element={<AddHouse />} />
            <Route
              path={"/profile/house/list/pending"}
              element={<PendingBooking />}
            />
            <Route
              path={"/profile/house/list/accept"}
              element={<BookingAcceptOwner />}
            />
          </Route>
        </Route>
        <Route path={"/"} element={<Home />} />
        <Route path={"/search"} element={<Content />} />
        <Route path={"/register"} element={<RegisterPage />} />
        <Route path={"/login"} element={<SignInPage />} />
        <Route path={"/detail/:id"} element={<Booking />} />
        <Route path={"/notification"} element={<Notification />} />
        <Route path={"/bookingPending"} element={<BookingPending />} />

        <Route path={"/admin"} element={<Dasboard />}>
          <Route path={"/admin/statistical"} element={<Statistical />} />
          <Route path={"/admin/pending-booking"} element={<Statistical />} />
          <Route path={"/admin/accept-booking"} element={<Statistical />} />
          <Route path={"/admin/houses"} element={<Houses />} />
          <Route path={"/admin/account"} element={<Statistical />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
