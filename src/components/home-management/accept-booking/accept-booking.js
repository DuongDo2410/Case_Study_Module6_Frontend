import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  bookingAcceptAction,
  bookingCanCelAction,
  getbookingAcceptRenterAction,
  getbookingPendingRenterAction,
} from "../../../redux/actionThunk/bookingActionThunk";

const AcceptBookingRenter = () => {
  const { bookingAcceptRenter } = useSelector((state) => state.booking);
  const disPatch = useDispatch();

  useEffect(() => {
    disPatch(getbookingAcceptRenterAction());
  }, []);
  return (
    <div>
      <table className="w-full table-auto rounded-xl">
        <thead>
          <tr className=" bg-gray-50 text-gray-500 ">
            <th className="py-3 px-6 text-left">Tên nhà</th>
            <th className="py-3 px-6 text-left">Địa chỉ</th>
            <th className="py-3 px-6 text-left">Giá tiền</th>
            <th className="py-3 w-36 text-center">Ngày đặt</th>
            <th className="py-3 w-36 text-center">trạng thái</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {bookingAcceptRenter &&
            bookingAcceptRenter.map((booking) => (
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">
                  <div className="flex items-center">
                    <p>{booking.idHome.name}</p>
                  </div>
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="flex items-center">
                    <p>{booking.idHome.address}</p>
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
                <td className="py-3 px-2 text-center">
                  <span
                    className={
                      booking.status == "ACCEPTED" &&
                      "bg-cyan-500 text-white py-1 px-3 rounded-full text-xs"
                    }
                  >
                    {booking.status == "ACCEPTED" && "đã xác nhận"}
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AcceptBookingRenter;
