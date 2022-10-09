import "./App.css";
import { useDispatch } from "react-redux";
import { getAllHouse } from "./redux/actionThunk/houseActionThunk";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import {Home} from "./Pages/HomePages/home";
import HouseContextProvider from "./components/search/HouseContext";
// import


function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllHouse());
  }, []);

  return (
      <HouseContextProvider>
            <BrowserRouter>
              <Routes>
                  <Route path={'/'}  element={<Home />} />
              </Routes>
            </BrowserRouter>
      </HouseContextProvider>
  );
}

export default App;
