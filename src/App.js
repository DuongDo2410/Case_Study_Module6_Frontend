import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./pages/home/home";
import {useDispatch, useSelector} from "react-redux";
import {getAllHouse, getTop5} from "./redux/actionThunk/houseActionThunk";
import {useEffect} from "react";
import UpdateProfile from "./pages/userProfile/UpdateProfile";
import Booking from "./pages/booking/booking";
import {RegisterPage} from "./pages/Register/RegisterPage";
import {SignInPage} from "./pages/SignIn/SignInPage";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import RightContent from "./components/userProfile/content/RightContent";
import AddHouse from "./components/addHouse/addHouse";
import {ChangePassword} from "./components/changePassword/changePassword";

import HistoryRentHouse from "./components/history/HistoryRentHouse";
import Notification from "./components/Notification/Notification";
import BookingPending from "./components/bookingPending/BookingPending";
import HomeManagement from "./components/home-management";
import PendingBooking from "./components/home-management/pending-booking/pending-booking";
import Content from "./components/search/content";
import BookingAcceptOwner from "./components/home-management/accept-booking/accept-booking";
import Dasboard from "./pages/admin/dasboard";
import Statistical from "./pages/admin/statistical/statistical";
import Houses from "./pages/admin/house/houses";
import Create from "./pages/admin/house/create/create";
import Update from "./pages/admin/house/update/update";
import {setStatusUserActionIdle} from "./redux/slide/userSlide";
import Loading from "./components/Notification/loading";

function App() {
    let statusUser = useSelector((state) => state.user.status);
    console.log(statusUser)
    let statusHouse = useSelector((state) => state.house.status);
    let statusBooking = useSelector((state) => state.booking.status);
    let statusAuth = useSelector((state) => state.auth.status);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllHouse());
        dispatch(getTop5());
        dispatch(setStatusUserActionIdle());
    }, []);

    return (
        <div>
            {(statusAuth === "pending" || statusUser === "pending" || statusHouse === "pending" || statusBooking === "pending") &&
                <Loading/>}
            <BrowserRouter>
                <Routes>
                    <Route path={"/profile"} element={<UpdateProfile/>}>
                        <Route path={"/profile/:fullName"} element={<RightContent/>}/>
                        <Route
                            path={"/profile/changePassword"}
                            element={<ChangePassword/>}
                        />
                        <Route path={"/profile/history"} element={<HistoryRentHouse/>}/>

                        <Route path={"/profile/house/list"} element={<HomeManagement/>}>
                            <Route path={"/profile/house/list/create"} element={<AddHouse/>}/>
                            <Route
                                path={"/profile/house/list/pending"}
                                element={<PendingBooking/>}
                            />
                            <Route
                                path={"/profile/house/list/accept"}
                                element={<BookingAcceptOwner/>}
                            />
                        </Route>
                    </Route>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/search"} element={<Content/>}/>
                    <Route path={"/register"} element={<RegisterPage/>}/>
                    <Route path={"/login"} element={<SignInPage/>}/>
                    <Route path={"/detail/:id"} element={<Booking/>}/>
                    <Route path={"/notification"} element={<Notification/>}/>
                    <Route path={"/bookingPending"} element={<BookingPending/>}/>

                    <Route path={"/admin"} element={<Dasboard/>}>
                        <Route path={"/admin/statistical"} element={<Statistical/>}/>
                        <Route path={"/admin/pending-booking"} element={<Statistical/>}/>
                        <Route path={"/admin/accept-booking"} element={<Statistical/>}/>
                        <Route path={"/admin/houses"} element={<Houses/>}/>
                        <Route path={"/admin/houses/create"} element={<Create/>}/>
                        <Route path={"/admin/houses/update/:id"} element={<Update/>}/>
                        <Route path={"/admin/account"} element={<Statistical/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
