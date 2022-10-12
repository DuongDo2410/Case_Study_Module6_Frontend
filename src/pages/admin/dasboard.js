import React from "react";
import {Link, NavLink, Outlet, useNavigate} from "react-router-dom";
import { BiCalendarMinus } from "react-icons/bi";
import { BiClipboard } from "react-icons/bi";
import { BiBuildingHouse } from "react-icons/bi";
import { BiCalendarCheck } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import { BiBarChartAlt2 } from "react-icons/bi";
import "./dashboard.css";
import {useDispatch} from "react-redux";
import {getStatistic} from "../../redux/actionThunk/userActionThunk";
import {setStatusUserActionIdle} from "../../redux/slide/userSlide";
const Dasboard = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const toggleStatistics = () => {
    dispatch(getStatistic());
    dispatch(setStatusUserActionIdle);
    navigate('/admin/statistical');
  };
  return (
    <>
      <div className="min-h-screen flex">
        <div className="p-6 w-60 flex flex-col justify-between">
          <div>
            <div className="flex space-2 items-center border-b-2 pb-4">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/shop-11594.appspot.com/o/images%2Flogo.png?alt=media&token=5153edea-5f50-437b-9f8a-7594126d1b46"
                alt=""
                className="w-full h-16 object-cover"
              />
            </div>
            <div>
              <NavLink
                to="/admin/statistical"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center space-x-4 mt-6 p-2 bg-[#4fba81] text-white hover:text-white rounded-md cursor-pointer"
                    : "p-2 flex items-center space-x-4 mt-6 text-gray-500  hover:bg-[#4fba81] hover:rounded-md hover:text-white hover: cursor-pointer transition duration-200"
                }
              >
                <div>
                  <BiBarChartAlt2 size={30} style={{ marginRight: "12px" }} />
                </div>
                <div>
                  <p className="text-lg font-semibold">Thống kê</p>
                </div>
              </NavLink>
            </div>
            <div className="mt-8">
              <ul className="space-y-10">
                <li>
                  <NavLink
                    to="/admin/pending-booking"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center space-x-4 mt-6 p-2 bg-[#4fba81] text-white hover:text-white rounded-md cursor-pointer"
                        : "p-2 flex items-center space-x-4 mt-6 text-gray-500  hover:bg-[#4fba81] hover:rounded-md hover:text-white hover: cursor-pointer transition duration-200"
                    }
                  >
                    <BiCalendarMinus
                      size={25}
                      style={{ marginRight: "12px" }}
                    />
                    Đơn chờ
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admin/accept-booking"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center space-x-4 mt-6 p-2 bg-[#4fba81] text-white hover:text-white rounded-md cursor-pointer"
                        : "p-2 flex items-center space-x-4 mt-6 text-gray-500  hover:bg-[#4fba81] hover:rounded-md hover:text-white hover: cursor-pointer transition duration-200"
                    }
                  >
                    <BiCalendarCheck
                      size={25}
                      style={{ marginRight: "12px" }}
                    />
                    Đơn đã xác nhận
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admin/houses"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center space-x-4 mt-6 p-2 bg-[#4fba81] text-white hover:text-white rounded-md cursor-pointer"
                        : "p-2 flex items-center space-x-4 mt-6 text-gray-500  hover:bg-[#4fba81] hover:rounded-md hover:text-white hover: cursor-pointer transition duration-200"
                    }
                  >
                    <BiBuildingHouse
                      size={25}
                      style={{ marginRight: "12px" }}
                    />
                    Danh sách nhà
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admin/account"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center space-x-4 mt-6 p-2 bg-[#4fba81] text-white hover:text-white rounded-md cursor-pointer"
                        : "p-2 flex items-center space-x-4 mt-6 text-gray-500  hover:bg-[#4fba81] hover:rounded-md hover:text-white hover: cursor-pointer transition duration-200"
                    }
                  >
                    <BiUser size={25} style={{ marginRight: "12px" }} />
                    Tài khoản
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center text-sm font-semibold text-gray-500  transition duration-200">
            <button className="flex items-center font-semibold w-full text-gray-500 hover:bg-[#4fba81] hover:rounded-md p-2 hover:text-white cursor-pointer transition duration-200">
              <BiLogOut size={25} style={{ marginRight: "12px" }} />
              Logout
            </button>
          </div>
        </div>
        <div className="bg-gray-50 flex-grow py-12 px-10">
          <Outlet />
        </div>
        <div />
        <div />
      </div>
      <div />
      <div />
    </>
  );
};

export default Dasboard;
