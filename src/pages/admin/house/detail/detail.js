import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getHouseById,
  getOne,
  updateHouse,
} from "../../../../redux/actionThunk/houseActionThunk";
import { useNavigate, useParams } from "react-router";
import { setStatusHouseActionIdle } from "../../../../redux/slide/houseSlide";
import { BiMap } from "react-icons/bi";
import { BiBed } from "react-icons/bi";
import { BiBath } from "react-icons/bi";
import { BiShapeSquare } from "react-icons/bi";
import { getBookingByIdHomeAction } from "../../../../redux/actionThunk/bookingActionThunk";


const Detail = () => {
  let { house } = useSelector((state) => state.house);
  let { bookingByIdHome } = useSelector((state) => state.booking);
  let dispatch = useDispatch();
  let { id } = useParams();
  useEffect(() => {
    dispatch(getOne(id));
    dispatch(getBookingByIdHomeAction(id));
    dispatch(setStatusHouseActionIdle());
  }, []);
  return (
    <div className="w-full bg-white p-5 min-h-[550px] h-max shadow-lg rounded-lg">
      <div className="flex justify-between border-b pb-6 items-center">
        <h4 className="text-2xl">Thông tin nhà</h4>
      </div>
      <main className="mt-10">
        <div className="mb-4 md:mb-0 w-full mx-auto relative">
          <div className="px-4 lg:px-0">
            <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
              {house && house.name}
            </h2>
            <div className="flex justify-between items-center">
              <p
                href="#"
                className="py-2 text-[#4fba81] inline-flex items-center justify-center mb-2 text-xl"
              >
                <BiMap />
                {house && house.address}
              </p>
              <p className="text-2xl text-[#4fba81]">
                {house &&
                  new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(house.price) + " / đêm"}
              </p>
            </div>
          </div>
          <img
            src={house && house.idImage.link}
            className="w-full object-cover lg:rounded"
            style={{ height: "28em" }}
          />
        </div>
        <div className="">
          <div className="flex gap-x-4 my-4 ">
            <div className="flex items-center text-[#4fba81] gap-1 ">
              <div className="text-[20px] rounded-full ">
                <BiBed size={25} />
              </div>
              <div className=" mt-1 text-2xl">
                {house && house.amountBedroom}
              </div>
            </div>
            <div className="flex items-center text-[#4fba81] gap-1">
              <div className="text-[20px] rounded-full">
                <BiBath size={25} />
              </div>
              <div className="text-2xl mt-1">
                {house && house.amountBathroom}
              </div>
            </div>
            <div className="flex items-center text-[#4fba81] gap-1">
              <div className="text-[20px] rounded-full">
                <BiShapeSquare size={25} />
              </div>
              <div className="text-2xl mt-1">{house && house.area}m2</div>
            </div>
          </div>
          <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full">
            <p className="pb-6">{house && house.description}</p>
          </div>
          <div className="px-4 lg:px-0 mt-12 text-gray-700 leading-relaxed w-full ">
            <p className="pb-6 text-2xl mb-6">Danh sách đơn chờ</p>
            <table className="w-full table-auto rounded-xl">
              <thead>
                <tr className=" bg-gray-50 text-gray-500 ">
                  <th className="py-3 pl-6 text-left">Tên người đặt</th>
                  <th className="py-3 px-6 text-left">Giá tiền</th>
                  <th className="py-3 px-6 text-left">Ngày đặt</th>
                  <th className="py-3 text-center">trạng thái</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {bookingByIdHome &&
                  bookingByIdHome.map((booking) => (
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          {/* <img
                            src={house?.idImage[0]?.link}
                            alt=""
                            className="w-20 h-20 object-cover"
                          /> */}
                          <p>{booking.idRenter.username}</p>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex items-center">
                          <p>{booking.idHome.price}</p>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex items-center">
                          {new Date(booking.startDay).toLocaleDateString()}-
                          {new Date(booking.endDay).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <span
                          className={
                            booking.status == "PENDING"
                              ? "bg-orange-400 text-white py-1 px-3 rounded-full text-xs"
                              : booking.status == "ACCEPTED"
                              ? "bg-cyan-500 text-white py-1 px-3 rounded-full text-xs"
                              : ""
                          }
                        >
                          {booking.status == "PENDING"
                            ? "chờ xác nhận"
                            : booking.status == "ACCEPTED"
                            ? "đã xác nhận"
                            : ""}
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Detail;
