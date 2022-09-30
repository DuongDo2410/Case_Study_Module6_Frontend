import "./App.css";
import Banner from "./components/banner/banner";
import Header from "./components/header/header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UpdateProfile from "./pages/userProfile/UpdateProfile";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={"/profile"} element={<UpdateProfile/>} />
              <Route path={"/"} element={<Banner/>} />
          </Routes>
      </BrowserRouter>

  );
}

export default App;
