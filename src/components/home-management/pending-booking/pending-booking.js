import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookingAcceptAction } from "../../../redux/actionThunk/bookingActionThunk";

const PendingBooking = () => {
  const bookingPending = useSelector((state) => state.booking.bookingPending);
  const disPatch = useDispatch();
  const handelClick = (idHome, idBooking) => {
    // console.log("11111", idHome, idBooking);
    let payload = { idHome, idBooking };
    disPatch(bookingAcceptAction(payload));
  };
  return (
    <div>
      <ul className="divide-y divide-slate-100">
        {bookingPending &&
          bookingPending.map((booking) => (
            <article className="flex items-start space-x-6 p-6">
              <div className="min-w-0 relative flex-auto">
                <h2 className="font-semibold text-slate-900 truncate pr-20 mr-5 flex justify-start">
                  {booking.idHome.name}
                </h2>
                <dl className="mt-2 flex flex-wrap justify-start text-sm leading-6 font-medium">
                  <div className="absolute top-0 right-0 flex items-center space-x-1">
                    <dt className="text-sky-500 flex">
                      <span className="sr-only">Star rating</span>
                      <button
                        type="button"
                        onClick={() =>
                          handelClick(booking.idHome._id, booking._id)
                        }
                        class=" text-white bg-sky-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Xác nhận
                      </button>
                    </dt>
                  </div>
                  <div>
                    <dt className="sr-only">Rating</dt>
                  </div>
                  <div className="ml-2">
                    <dt className="sr-only">Year</dt>
                    <dd>
                      {new Date(booking.startDay).toLocaleDateString()}-
                      {new Date(booking.endDay).toLocaleDateString()}
                    </dd>
                  </div>
                  <div>
                    <dt className="sr-only">Genre</dt>
                    <dd className="flex items-center">
                      <svg
                        width="2"
                        height="2"
                        fill="currentColor"
                        className="mx-2 text-slate-300"
                        aria-hidden="true"
                      >
                        <circle cx="1" cy="1" r="1" />
                      </svg>
                      {booking.idHome.typeRoom}
                    </dd>
                  </div>
                  <div>
                    <dt className="sr-only">Runtime</dt>
                    <dd className="flex items-center">
                      <svg
                        width="2"
                        height="2"
                        fill="currentColor"
                        className="mx-2 text-slate-300"
                        aria-hidden="true"
                      >
                        <circle cx="1" cy="1" r="1" />
                      </svg>
                      {booking.idHome.amountBedroom} phòng ngủ,
                      {booking.idHome.amountBathroom} phòng tắm
                    </dd>
                  </div>
                  <div className="flex-none w-full mt-2 font-normal flex flex-wrap justify-start">
                    <dt className="sr-only">Cast</dt>
                    <dd className="text-slate">{booking.totalMoney} VND</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
      </ul>
    </div>
  );
};

export default PendingBooking;
