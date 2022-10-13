import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./pages/home/home";
import { useDispatch, useSelector } from "react-redux";
import { getAllHouse, getTop5 } from "./redux/actionThunk/houseActionThunk";
import { useEffect } from "react";
import UpdateProfile from "./pages/userProfile/UpdateProfile";
import Booking from "./pages/booking/booking";
import { RegisterPage } from "./pages/Register/RegisterPage";
import { SignInPage } from "./pages/SignIn/SignInPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import RightContent from "./components/userProfile/content/RightContent";
import { ChangePassword } from "./components/changePassword/changePassword";
import BookingPending from "./components/bookingPending/BookingPending";
import Content from "./components/search/content";
import BookingAcceptOwner from "./components/home-management/accept-booking/accept-booking";
import Dasboard from "./pages/admin/dasboard";
import Statistical from "./pages/admin/statistical/statistical";
import Houses from "./pages/admin/house/houses";
import Create from "./pages/admin/house/create/create";
import Update from "./pages/admin/house/update/update";
import { setStatusUserActionIdle } from "./redux/slide/userSlide";
import Account from "./pages/admin/account/account";
import PendingBooking from "./pages/admin/booking/pending-booking/pending-booking";
import AcceptBooking from "./pages/admin/booking/accept-booking/accept-booking";
import PendingBookingRenter from "./components/home-management/pending-booking/pending-booking";
import AcceptBookingRenter from "./components/home-management/accept-booking/accept-booking";
import HistoryBookingRenter from "./components/history/HistoryRentHouse";
import { ChangePasswordOwner } from "./pages/admin/account/change-password";
import Detail from "./pages/admin/house/detail/detail";
import Loading from "./components/notification/loading";

function App() {
  let statusUser = useSelector((state) => state.user.status);
  let statusHouse = useSelector((state) => state.house.status);
  let statusBooking = useSelector((state) => state.booking.status);
  let statusAuth = useSelector((state) => state.auth.status);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllHouse());
    dispatch(getTop5());
    dispatch(setStatusUserActionIdle());
  }, []);

  return (
    <div>
      {(statusAuth === "pending" ||
        statusUser === "pending" ||
        statusHouse === "pending" ||
        statusBooking === "pending") && <Loading />}
      <BrowserRouter>
        <Routes>
          <Route path={"/profile"} element={<UpdateProfile />}>
            <Route path={"/profile/:id"} element={<RightContent />} />
            <Route
              path={"/profile/changePassword"}
              element={<ChangePassword />}
            />
            <Route
              path={"/profile/history"}
              element={<HistoryBookingRenter />}
            />
            <Route
              path={"/profile/bookingPending"}
              element={<PendingBookingRenter />}
            />
            <Route
              path={"/profile/bookingAccept"}
              element={<AcceptBookingRenter />}
            />
          </Route>
          <Route path={"/"} element={<Home />} />
          <Route path={"/search"} element={<Content />} />
          <Route path={"/register"} element={<RegisterPage />} />
          <Route path={"/login"} element={<SignInPage />} />
          <Route path={"/detail/:id"} element={<Booking />} />
          {/*<Route path={"/notification"} element={<Notification />} />*/}

          <Route path={"/admin"} element={<Dasboard />}>
            <Route path={"/admin/statistical"} element={<Statistical />} />
            <Route
              path={"/admin/pending-booking"}
              element={<PendingBooking />}
            />
            <Route path={"/admin/accept-booking"} element={<AcceptBooking />} />
            <Route path={"/admin/accept-booking"} element={<Statistical />} />
            <Route path={"/admin/houses"} element={<Houses />} />
            <Route path={"/admin/houses/create"} element={<Create />} />
            <Route path={"/admin/houses/update/:id"} element={<Update />} />
            <Route path={"/admin/account"} element={<Account />} />
            <Route path={"/admin/houses/:id"} element={<Detail />} />
            <Route
              path={"/admin/changePassword"}
              element={<ChangePasswordOwner />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
