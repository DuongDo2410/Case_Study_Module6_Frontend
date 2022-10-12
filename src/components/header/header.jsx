import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  getUserById,
  setStatusUserAction,
} from "../../redux/actionThunk/userActionThunk";
import LogoutGoogle from "../../pages/SignIn/LogoutGoogle";
import { getHistory } from "../../redux/actionThunk/houseActionThunk";

const Header = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const disPatch = useDispatch();
  let { user } = useSelector((state) => state.auth);
  let token = localStorage.getItem("accessToken");
  const handellogout = () => {
    navigate("/login");
  };
  return (
    <header className="py-4 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/shop-11594.appspot.com/o/images%2Flogo.png?alt=media&token=5153edea-5f50-437b-9f8a-7594126d1b46"
            alt=""
            className="w-full h-16 object-cover"
          />
        </Link>
        <div className="flex items-center gap-6">
          {token ? (
            <>
              <div>
                <button
                  type="button"
                  className="inline-flex w-full justify-center items-center rounded-md py-2 text-sm font-medium text-gray-700"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={() => setShow(!show)}
                >
                  <img
                    src={user && `${user?.avatar}`}
                    alt=""
                    className="w-10 h-10 mr-3 rounded-3xl"
                  />
                  {user && user?.fullName}
                </button>
              </div>
              {show && (
                <div
                  className="absolute top-16 right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  // tabindex="-1"
                >
                  <div className="py-1" role="none">
                    <Link
                      to={user && `/profile/${user.id}`}
                      class="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-0"
                    >
                      Tài khoản
                    </Link>
                    <LogoutGoogle />

                    {/* <Link
                      to={"/notification"}
                      class="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-0"
                    >
                      Notification
                    </Link> */}

                    {/*<button*/}
                    {/*  type="submit"*/}
                    {/*  className="text-gray-700 block w-full px-4 py-2 text-left text-sm"*/}
                    {/*  role="menuitem"*/}
                    {/*  // tabindex="-1"*/}
                    {/*  id="menu-item-3"*/}
                    {/*  onClick={() => handellogout()}*/}
                    {/*>*/}
                    {/*  Sign out*/}
                    {/*</button>*/}
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              <Link
                className="hover:text-violet-900 transition font-medium text-lg text-[#4fba81]"
                to="/login"
              >
                Đăng nhập
              </Link>
              <Link
                className="bg-[#4fba81] hover:bg-[#48a573] hover:text-white text-white font-medium text-lg px-4 py-3 rounded-lg transition"
                to="/register"
              >
                Đăng ký
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
