import React, { useEffect } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { BiCalendarMinus } from "react-icons/bi";
import { BiClipboard } from "react-icons/bi";
import { BiBuildingHouse } from "react-icons/bi";
import { BiCalendarCheck } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import { BiBarChartAlt2 } from "react-icons/bi";
import "./dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { getbookingSuccessOwnerAction } from "../../redux/actionThunk/bookingActionThunk";
import { TiLockClosed } from "react-icons/ti";
const Dasboard = () => {
  const { bookingSuccess } = useSelector((state) => state.booking);
  const disPatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    disPatch(getbookingSuccessOwnerAction());
  }, []);
  const handleLogout = (res) => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("accessToken");
    navigate("/login");
  };
  return (
    <>
      <div className="min-h-screen flex ">
        <div className="py-3 px-6 w-60 shadow-lg fixed top-0 left-0 bottom-0 ">
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
                to={"/admin/statistical"}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center space-x-4 p-2 bg-[#4fba81] text-white hover:text-white rounded-md cursor-pointer"
                    : "p-2 flex items-center space-x-4 text-gray-500  hover:bg-[#4fba81] hover:rounded-md hover:text-white hover: cursor-pointer transition duration-200"
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
                        ? "flex items-center space-x-4 p-2 bg-[#4fba81] text-white hover:text-white rounded-md cursor-pointer"
                        : "p-2 flex items-center space-x-4 text-gray-500  hover:bg-[#4fba81] hover:rounded-md hover:text-white hover: cursor-pointer transition duration-200"
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
                        ? "flex items-center space-x-4 p-2 bg-[#4fba81] text-white hover:text-white rounded-md cursor-pointer"
                        : "p-2 flex items-center space-x-4 text-gray-500  hover:bg-[#4fba81] hover:rounded-md hover:text-white hover: cursor-pointer transition duration-200"
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
                        ? "flex items-center space-x-4 p-2 bg-[#4fba81] text-white hover:text-white rounded-md cursor-pointer"
                        : "p-2 flex items-center space-x-4 text-gray-500  hover:bg-[#4fba81] hover:rounded-md hover:text-white hover: cursor-pointer transition duration-200"
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
                        ? "flex items-center space-x-4 p-2 bg-[#4fba81] text-white hover:text-white rounded-md cursor-pointer"
                        : "p-2 flex items-center space-x-4 text-gray-500  hover:bg-[#4fba81] hover:rounded-md hover:text-white hover: cursor-pointer transition duration-200"
                    }
                  >
                    <BiUser size={25} style={{ marginRight: "12px" }} />
                    Tài khoản
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admin/changePassword"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center space-x-4 p-2 bg-[#4fba81] text-white hover:text-white rounded-md cursor-pointer"
                        : "p-2 flex items-center space-x-4 text-gray-500  hover:bg-[#4fba81] hover:rounded-md hover:text-white hover: cursor-pointer transition duration-200"
                    }
                  >
                    <TiLockClosed size={25} style={{ marginRight: "12px" }} />
                    Thay đổi mật khẩu
                  </NavLink>
                </li>
                <li>
                  <button
                    onClick={() => handleLogout()}
                    className="flex items-center font-semibold w-full text-gray-500 hover:bg-[#4fba81] hover:rounded-md p-2 hover:text-white cursor-pointer transition duration-200"
                  >
                    <BiLogOut size={25} style={{ marginRight: "12px" }} />
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 flex-grow py-12 px-10 ml-60">
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
