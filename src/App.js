import "./App.css";
import Banner from "./components/banner/banner";
import Header from "./components/header/header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UpdateProfile from "./pages/userProfile/UpdateProfile";

function App() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
