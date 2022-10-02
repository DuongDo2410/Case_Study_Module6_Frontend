import "./App.css";
import Banner from "./components/banner/banner";
import Header from "./components/header/header";
import House from "./components/house/house";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/footer/footer";
import Booking from "./pages/booking/booking";
import { RegisterPage } from "./pages/Register/RegisterPage";
import { SignInPage } from "./pages/SignIn/SignInPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpdateProfile from "./pages/userProfile/UpdateProfile";
import Home from "./pages/home/home";

function App() {
  return (
    // <div>
    //   <Header />
    //   <Banner />
    //   <div className="container mx-auto grid grid-cols-3 gap-6">
    //     <House />
    //     <House />
    //     <House />
    //   </div>
    //   <div>
    //     <h2>Báo chí nhận xét gì về chúng tôi</h2>
    //     <div className="grid ">
    //       <img src="" alt="" />
    //     </div>
    //   </div>
    //   <Footer />
    //   {/* <Booking />  */}
    //   {/* <RegisterPage /> */}
    //   {/* <SignInPage /> */}
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path={"/profile"} element={<UpdateProfile />} />
        <Route path={"/"} element={<Home />} />
        <Route path={"/register"} element={<RegisterPage />} />
        <Route path={"/login"} element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
