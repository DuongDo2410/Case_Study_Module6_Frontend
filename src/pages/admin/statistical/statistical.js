import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getbookingSuccessOwnerAction } from "../../../redux/actionThunk/bookingActionThunk";
const Statistical = () => {
  const { bookingSuccess } = useSelector((state) => state.booking);
  console.log(bookingSuccess);
  const disPatch = useDispatch();
  useEffect(() => {
    disPatch(getbookingSuccessOwnerAction());
  }, []);
  return (
    <>
      <div className="flex justify-between">
        <div>
          <h4 className="text-sm font-bold text-[#6861BA]">Hi Andrei,</h4>
          <h1 className="text-4xl font-bold text-[#6861BA] mt-">
            Welcome to Duckies!
          </h1>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-3 space-x-4 gap-8">
          <div className="flex items-center justify-around p-6 bg-white rounded-xl space-x-2 mt-10 shadow-lg">
            <div>
              <span className="text-sm font-semibold text-gray-400">
                Spent this month
              </span>
              <h1 className="text-2xl font-bold">$682.5</h1>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#6861BA]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-around p-6 bg-white rounded-xl space-x-2 mt-10 shadow-lg">
            <div>
              <span className="text-sm font-semibold text-gray-400">
                Spent this month
              </span>
              <h1 className="text-2xl font-bold">$682.5</h1>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#6861BA]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-around p-6 bg-white rounded-xl space-x-2 mt-10 shadow-lg">
            <div>
              <span className="text-sm font-semibold text-gray-400">
                Spent this month
              </span>
              <h1 className="text-2xl font-bold">$682.5</h1>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#6861BA]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <div className="w-full flex items-center justify-center  font-sans overflow-hidden">
          <div className="w-full">
            <div className="bg-white shadow-md rounded my-6">
              <table className="w-full table-auto rounded-xl">
                <thead>
                  <tr className=" bg-gray-50 text-gray-500 ">
                    <th className="py-3 pl-6 w-32 text-left">Tên người đặt</th>
                    <th className="py-3 px-6 text-left">Tên nhà</th>
                    <th className="py-3 px-6 text-left">Địa chỉ</th>
                    <th className="py-3 px-6 text-left">Giá tiền</th>
                    <th className="py-3 px-6 text-left">Ngày đặt</th>
                    <th className="py-3 w-36 text-center">trạng thái</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {bookingSuccess &&
                    bookingSuccess.map((booking) => (
                      <tr className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left whitespace-nowrap">
                          <div className="flex items-center">
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
                              booking.status == "SUCCESS" &&
                              "bg-lime-500 text-white py-1 px-3 rounded-full text-xs"
                            }
                          >
                            {booking.status == "SUCCESS" && "thành công"}
                          </span>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistical;
