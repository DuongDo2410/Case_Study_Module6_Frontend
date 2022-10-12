import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from "react-redux";
import { getAllHouse } from "./redux/actionThunk/houseActionThunk";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RightContent from "./components/userProfile/content/RightContent";
import AddHouse from "./components/addHouse/addHouse";
import { ChangePassword } from "./components/changePassword/changePassword";
import Home from "./Pages/Home/home";
import {RegisterPage} from "./Pages/Register/RegisterPage";
import {SignInPage} from "./Pages/SignIn/SignInPage";
import Booking from "./Pages/booking/booking";
import UpdateProfile from "./Pages/userProfile/UpdateProfile";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
