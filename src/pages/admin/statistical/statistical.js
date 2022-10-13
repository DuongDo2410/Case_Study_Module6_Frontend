import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getbookingSuccessOwnerAction } from "../../../redux/actionThunk/bookingActionThunk";
import { getStatistic } from "../../../redux/actionThunk/userActionThunk";

const Statistical = () => {
  const { bookingSuccess } = useSelector((state) => state.booking);
  const disPatch = useDispatch();
  useEffect(() => {
    disPatch(getbookingSuccessOwnerAction());
  }, []);
  let { statistic } = useSelector((state) => state.user);
  useEffect(() => {
    disPatch(getStatistic());
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
        <div className="grid grid-cols-2 space-x-4 gap-8">
          <div className="flex items-center justify-around p-6 bg-white rounded-xl space-x-2 mt-10 shadow-lg">
            <div>
              <span className="text-3xl font-semibold text-gray-400">
                Doanh thu của tuần
              </span>
              <h1 className="text-2xl font-bold">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(statistic.week)}
              </h1>
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
              <span className="text-3xl font-semibold text-gray-400">
                Doanh thu của tháng
              </span>
              <h1 className="text-2xl font-bold">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(statistic.month)}
              </h1>
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
        </div>
      </div>
      <div className="overflow-x-auto bg-white mt-10 rounded-lg p-4 shadow-lg">
        <div className="flex justify-between border-b pb-6 items-center">
          <h4 className="text-2xl">Danh sách đơn thành công</h4>
        </div>
        <div className="w-full flex items-center justify-center  font-sans overflow-hidden">
          <div className="w-full">
            <div className="bg-white shadow-md rounded my-6">
              <table className="w-full table-auto rounded-xl">
                <thead>
                  <tr className=" bg-gray-50 text-gray-500 ">
                    <th className="py-3 pl-6 w-32 text-center">
                      Tên người đặt
                    </th>
                    <th className="py-3 px-6 w-32 text-center">Tên nhà</th>
                    <th className="py-3 px-6 text-center">Địa chỉ</th>
                    <th className="py-3 px-6 text-center">Giá tiền</th>
                    <th className="py-3 px-6 text-center">Ngày đặt</th>
                    <th className="py-3 w-36 text-center">trạng thái</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {bookingSuccess &&
                    bookingSuccess.map((booking) => (
                      <tr className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-center whitespace-nowrap">
                          <div className="flex items-center">
                            <p>{booking.idRenter.username}</p>
                          </div>
                        </td>
                        <td className="py-3 px-6 text-center">
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
                            <p>
                              {new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              }).format(booking.idHome.price)}
                            </p>
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
