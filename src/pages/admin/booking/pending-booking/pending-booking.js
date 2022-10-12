import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  bookingAcceptAction,
  bookingPendingAction,
  getBookingAction,
} from "../../../../redux/actionThunk/bookingActionThunk";
import { AiOutlineEye } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
const PendingBooking = () => {
  const { bookingPending } = useSelector((state) => state.booking);
  console.log(bookingPending);
  const disPatch = useDispatch();
  const handelAcceptClick = (idHome, idBooking) => {
    console.log("11111", idHome, idBooking);
    let payload = { idHome, idBooking };
    disPatch(bookingAcceptAction(payload));
  };
  useEffect(() => {
    disPatch(bookingPendingAction());
  }, []);
  return (
    <>
      <div className="w-full bg-white p-5 min-h-[550px] h-max">
        <div className="flex justify-between border-b pb-6 items-center">
          <h4 className="text-2xl">Danh sách đơn chờ</h4>
        </div>
        <div className="w-full flex items-center justify-center  font-sans overflow-hidden">
          <div className="w-full bg-white shadow-md rounded my-6">
            <table className="w-full table-auto rounded-xl">
              <thead>
                <tr className=" bg-gray-50 text-gray-500 ">
                  <th className="py-3 pl-6 w-32 text-left">Tên người đặt</th>
                  <th className="py-3 px-6 text-left">Tên nhà</th>
                  <th className="py-3 px-6 text-left">Địa chỉ</th>
                  <th className="py-3 px-6 text-left">Giá tiền</th>
                  <th className="py-3 w-36 text-center">Ngày đặt</th>
                  <th className="py-3 w-36 text-center">trạng thái</th>
                  <th className="py-3 w-36 text-center">hành động</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {bookingPending &&
                  bookingPending.map((booking) => (
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
                      <td className="py-3 px-6 text-center">
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
                            <button
                              onClick={() =>
                                handelAcceptClick(
                                  booking.idHome._id,
                                  booking._id
                                )
                              }
                            >
                              <BiPencil size={20} />
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PendingBooking;
