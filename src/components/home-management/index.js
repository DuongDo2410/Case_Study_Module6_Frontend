import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import {
  bookingAcceptOwnerAction,
  bookingPendingAction,
} from "../../redux/actionThunk/bookingActionThunk";

const HomeManagement = () => {
  let disPatch = useDispatch();
  useEffect(() => {
    disPatch(bookingPendingAction());
    disPatch(bookingAcceptOwnerAction());
  }, []);
  return (
    <div>
      <div className="divide-y divide-slate-100">
        <div className="py-4 px-6 text-sm font-medium">
          <ul className="flex space-x-3">
            <Link
              to="/profile/house/list/create"
              isActive
              className={`block px-3 py-2 rounded-md bg-slate-50
              `}
            >
              Thêm nhà
            </Link>
            <Link
              to="/profile/house/list/pending"
              className={`block px-3 py-2 rounded-md  bg-slate-50
              `}
            >
              Danh sách chờ xác nhận
            </Link>
            <Link
              to="/profile/house/list/accept"
              className={`block px-3 py-2 rounded-md bg-slate-50
              `}
            >
              Các nhà đang được thuê
            </Link>
          </ul>
        </div>
        <div>
          <Outlet />
          {/* {history.map((h) => (
            <ListItem key={h._id} history={h} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default HomeManagement;
