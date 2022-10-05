import "./App.css";
import {RegisterPage} from "./Pages/Register/RegisterPage";
import {SignInPage} from "./Pages/SignIn/SignInPage";
import {ChangePassword} from "./Pages/ChangePassword/ChangePassword";
import {PostAHouse} from "./Pages/PostAHouse/PostAHouse";
import {AddHouse} from "./Pages/AddHouse/AddHoue";
import Carousel from "./Pages/Home/components/Carousel";
import Footer from "./Pages/Home/components/Footer";
import Selects from "./Pages/Home/components/Selects";
import Search from "./Pages/Home/components/Search";
import Destinations from "./Pages/Home/components/Destinations";
import Navbar from "./Pages/Home/components/Navbar";
import Hero from "./Pages/Home/components/Hero";
import {BookingPages} from "./Pages/BookingPages/BookingPages";



function App() {
  return (
    <div className="App">
        {/*<RegisterPage />*/}
        {/*<SignInPage/>*/}
        {/*<ChangePassword/>*/}
        {/*<PostAHouse/>*/}
        {/*<AddHouse/>*/}
        <BookingPages/>
        {/*<Navbar />*/}
        {/*<Hero />*/}
        {/*<Destinations />*/}
        {/*<Search />*/}
        {/*<Selects />*/}
        {/*<Carousel />*/}
        {/*<Footer />*/}

    </div>
  )
}

export default App;
