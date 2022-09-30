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
    <div>
      <Header />
      <Banner />
      <div className="container mx-auto grid grid-cols-3 gap-6">
        <House />
        <House />
        <House />
      </div>
      <div>
        <h2>Báo chí nhận xét gì về chúng tôi</h2>
        <div className="grid ">
          <img src="" alt="" />
        </div>
      </div>
      <Footer />
      {/* <Booking />  */}
      {/* <RegisterPage /> */}
      {/* <SignInPage /> */}
    </div>
  );
}

export default App;
