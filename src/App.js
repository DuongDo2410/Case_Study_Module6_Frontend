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

import HistoryRentHouse from "./components/history/HistoryRentHouse";
import Notification from "./components/Notification/Notification";
import BookingPending from "./components/bookingPending/BookingPending";
import HomeManagement from "./components/home-management";
import PendingBooking from "./components/home-management/pending-booking/pending-booking";
import Content from "./components/search/content";
import Loading from "./components/Notification/loading";
import * as React from "react";

function App() {
  let statusUser= useSelector((state) => state.user.status);
  console.log(statusUser)
  let statusHouse= useSelector((state) => state.house.status);
  let statusBooking = useSelector((state) => state.booking.status);
  let statusAuth = useSelector((state) => state.auth.status);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllHouse());
  }, []);

  return (
      <div>
        {(statusAuth === "pending" || statusUser === "pending" || statusHouse === "pending" || statusBooking === "pending") && <Loading />}
        <BrowserRouter>
          <Routes>
            <Route path={"/profile"} element={<UpdateProfile />}>
              <Route path={"/profile/:fullName"} element={<RightContent />} />
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
              </Route>
            </Route>
            <Route path={"/"} element={<Home />} />
            <Route path={"/search"} element={<Content />} />
            <Route path={"/register"} element={<RegisterPage />} />
            <Route path={"/login"} element={<SignInPage />} />
            <Route path={"/detail/:id"} element={<Booking />} />
            <Route path={"/notification"} element={<Notification />} />
            <Route path={"/bookingPending"} element={<BookingPending />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
