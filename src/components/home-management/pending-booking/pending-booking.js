import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  bookingAcceptAction,
  bookingCanCelAction,
  getbookingPendingRenterAction,
} from "../../../redux/actionThunk/bookingActionThunk";
import { BiTrash } from "react-icons/bi";
import { message, Popconfirm } from "antd";

const PendingBookingRenter = () => {
  const { bookingPendingRenter } = useSelector((state) => state.booking);
  const disPatch = useDispatch();
  const handelCanCelClick = (idBooking) => {
    disPatch(bookingCanCelAction(idBooking));
  };
  useEffect(() => {
    disPatch(getbookingPendingRenterAction());
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
            <th className="py-3 w-36 text-center">hành động</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {bookingPendingRenter &&
            bookingPendingRenter.map((booking) => (
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
                      booking.status == "PENDING" &&
                      "bg-orange-400 text-white py-1 px-3 rounded-full text-xs"
                    }
                  >
                    {booking.status == "PENDING" && "chờ xác nhận"}
                  </span>
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center">
                    <div className="w-4 mr-3 transform hover:text-purple-500 hover:scale-110">
                      <Popconfirm
                        placement="left"
                        title="Bạn có muốn xoá không?"
                        onConfirm={() => handelCanCelClick(booking._id)}
                        okText="Có"
                        cancelText="Không"
                      >
                        <button>
                          <BiTrash size={20} />
                        </button>
                      </Popconfirm>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendingBookingRenter;
