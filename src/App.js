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
import ChangePasswordPage from "./pages/userProfile/ChangePasswordPage";

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
                <Route path={"/profile"} element={<UpdateProfile/>}/>
                <Route path={"/profile/changePassword"} element={<ChangePasswordPage/>}/>
                <Route path={"/"} element={<Home />} />
                <Route path={"/register"} element={<RegisterPage />} />
                <Route path={"/login"} element={<SignInPage />} />
            </Routes>
        </BrowserRouter>

    );
}

export default App;
