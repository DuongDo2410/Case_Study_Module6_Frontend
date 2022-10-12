import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import SingleBedOutlinedIcon from "@mui/icons-material/SingleBedOutlined";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getOne } from "../../redux/actionThunk/houseActionThunk";
import moment from "moment";
import { bookingAction } from "../../redux/actionThunk/bookingActionThunk";
import Rate from "../../components/house/rate/Rate.js";
import Comment from "../../components/comment/comemnt";
import {setStatusHouseActionIdle} from "../../redux/slide/houseSlide";
const Booking = () => {
  let house = useSelector((state) => state.house.house);
  let dispatch = useDispatch();
  let { id } = useParams();
  const [startDay, setStartDay] = useState();
  const [endDay, setEndDay] = useState();
  const [totalMoney, setTotalMoney] = useState();
  const [booking, setBooking] = useState({
    startDay: "",
    endDay: "",
    totalMoney: "",
    idHome: "",
    idOwner: "",
  });
  useEffect(() => {
    dispatch(getOne(id));
    dispatch(setStatusHouseActionIdle());
  }, []);
  useEffect(() => {
    if (startDay && endDay) {
      let mountDay = moment(endDay).diff(moment(startDay), "days");
      setBooking({
        ...booking,
        startDay: startDay,
        endDay: endDay,
        totalMoney: new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(mountDay * house.price),
      });
    }
  }, [startDay, endDay]);
  const handelSubmit = (e) => {
    e.preventDefault();
    booking.idOwner = house.idUser;
    booking.idHome = house._id;
    dispatch(bookingAction(booking));
  };
  return (
    <>
      <Header />
      <div className="max-w-[1440px] mx-auto bg-white mt-10">
        <div className="container mx-auto min-h-[800px]">
          <div className="flex flex-col lg:flex-row  lg:justify-between">
            <div style={{ width: "800px" }}>
              <h2 className="text-2xl font-semibold truncate">
                {house && house?.name}
              </h2>
              <h3 className="text-lg mb-4 truncate">
                {house && house?.address}
              </h3>
            </div>
            <div className="text-3xl font-semibold text-violet-600"></div>
          </div>
          <div className="flex flex-col items-start gap-8 lg:flex-row">
            <div className="max-w-[768px]">
              <div className="flex gap-x-6 text-violet-700 mb-6">
                <div className="flex items-center text-gray-600 gap-1 ">
                  <div className="text-[20px] rounded-full">
                    <SingleBedOutlinedIcon />
                  </div>
                  <div className="text-base mt-1">
                    {house && house.amountBedroom}
                  </div>
                </div>
                <div className="flex items-center text-gray-600 gap-1">
                  <div className="text-[20px] rounded-full">
                    {/*<BathtubOutlinedIcon />*/}
                  </div>
                  <div className="text-base mt-1">
                    {house && house.amountBathroom}
                  </div>
                </div>
                <div className="flex items-center text-gray-600 gap-1">
                  <div className="text-[20px] rounded-full">
                    {/*<SquareFootOutlinedIcon />*/}
                  </div>
                  <div className="text-base mt-1">{house && house.area}m2</div>
                </div>
                <div className=" lg:mb-0 flex gap-x-2 text-sm items-center mt-3">
                  <p className="bg-[#4fba81] rounded-full text-black px-3 inline-block">
                    {house && house?.typeRoom}
                  </p>
                </div>
              </div>
              <div className="mb-8">
                <img
                  src={house && house?.idImage?.link}
                  alt=""
                  className="rounded-lg object-cover"
                  style={{
                    width: "800px",
                    height: "500px",
                  }}
                />

              </div>
              <p>{house && house?.description}</p>
              <div>
                <Rate rating={house?.rating}/>
              </div>
            </div>

            <div className="w-96">
              <div className="text-3xl font-semibold text-violet-600 flex justify-end">
                {house &&
                  new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(house.price) + " / đêm"}
              </div>
              <div className="flex-1 w-full mb-8 mt-8 bg-white border border-gray-100 rounded-lg px-6 py-8">
                <form className="flex flex-col gap-y-4" onSubmit={handelSubmit}>
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Ngày bắt đầu
                    </label>
                    <input
                      type="date"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={(e) => setStartDay(e.target.value)}
                      name="startDay"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Ngày kết thúc
                    </label>
                    <input
                      type="date"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={(e) => setEndDay(e.target.value)}
                      name="endDay"
                    />
                  </div>
                  <h2 className="text-xl">
                    Tổng tiền:{" "}
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(booking.totalMoney)}
                  </h2>
                  <div className="flex gap-x-2">
                    <button
                      type="submit"
                      className="bg-[#4fba81] hover:bg-[#48a573] hover:text-white text-white rounded p-4 text-sm w-full transition"
                    >
                      Đặt phòng
                    </button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
        <Comment house={house}/>
      </div>
      <Footer />
    </>
  );
};

export default Booking;
