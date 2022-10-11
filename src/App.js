import "./App.css";
import { useDispatch } from "react-redux";
import { getAllHouse } from "./redux/actionThunk/houseActionThunk";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./components/header/header";
import HouseContextProvider from "./components/search/HouseContext";
import Home from "./Pages/Home/home";
import {RegisterPage} from "./Pages/Register/RegisterPage";
import {SignInPage} from "./Pages/SignIn/SignInPage";
// import {ChangePassword} from "./Pages/ChangePassword/ChangePassword";



function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getAllHouse());
  }, []);

  return (
      <HouseContextProvider>
            <BrowserRouter>
              <Routes>
                  <Route path={'/'}  element={<Home/>} />
                  <Route path={'/register'}  element={<RegisterPage/>} />
                  <Route path={'/login'}  element={<SignInPage/>} />
              </Routes>
            </BrowserRouter>
      </HouseContextProvider>
  );
}

export default App;
