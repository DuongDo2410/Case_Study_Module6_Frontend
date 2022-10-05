import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./pages/home/home";
import { useDispatch } from "react-redux";
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
import {BookingPages} from "./Pages/BookingPages/BookingPages";

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
          <Route path={"/profile/addHouse"} element={<AddHouse />} />
          <Route
            path={"/profile/changePassword"}
            element={<ChangePassword />}
          />
        </Route>
        <Route path={"/"} element={<Home />} />
        <Route path={"/register"} element={<RegisterPage />} />
        <Route path={"/login"} element={<SignInPage />} />
        <Route path={"/detail/:id"} element={<Booking />} />
        <Route path={"/booking/:id"} element={<BookingPages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
