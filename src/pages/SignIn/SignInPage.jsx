import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/actionThunk/authActionThunk";
import { gapi } from "gapi-script";
import LoginGoogle from "./GoogleLogin";
import { setStatusAuthActionIdle } from "../../redux/slide/authSlide";
const clientID =
  "834466386428-j6ifk7es8vo0k3r86c50ekojr26jd1m1.apps.googleusercontent.com";
const clientSecret = "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";

export function SignInPage() {
  const disPatch = useDispatch();
  const navigate = useNavigate();
  let { status } = useSelector((state) => state.auth);
  console.log(status);

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientID,
        scope: "profile",
      });
    }
    gapi.load("client:auth2", start);
  });

  useEffect(() => {
    if (status === "fulfilled") {
      disPatch(setStatusAuthActionIdle());
      let role = localStorage.getItem("currentUser");
      console.log(role);
      role.role == "user" ? navigate("/") : navigate("/admin/statistical");
    }
  }, [status]);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validationSchema: Yup.object({
      username: Yup.string().required("Không để trống"),
      password: Yup.string().required("Không để trống"),
    }),
    onSubmit: (values) => {
      disPatch(loginAction(values));
    },
  });

  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-center px-6 mt-12">
          {/* Row */}
          <div className="w-full xl:w-3/4 lg:w-11/12 flex shadow-lg shadow-slate-500 rounded-lg">
            {/* Col */}
            <div
              className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
              style={{
                backgroundImage:
                  'url("https://source.unsplash.com/K4mSJ7kc0As/600x800")',
              }}
            />
            {/* Col */}
            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center">Đăng nhập!</h3>
              <form
                className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                onSubmit={formik.handleSubmit}
              >
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="username"
                  >
                    Tên đăng nhập
                  </label>
                  <input
                    className={
                      formik.touched.username && formik.errors.username
                        ? "w-full px-3 py-2 mb-3 text-sm leading-tight border rounded shadow appearance-none border-red-500 text-red-900 placeholder-red-700 focus:outline-none focus:ring-red-500  focus:border-red-500 block"
                        : "w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-gray-300 rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-blue-500"
                    }
                    id="username"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                  />
                  {formik.touched.username && formik.errors.username ? (
                    <p className="text-xs italic text-red-500">
                      {formik.errors.username}
                    </p>
                  ) : null}
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="password"
                  >
                    Mật khẩu
                  </label>
                  <input
                    className={
                      formik.touched.password && formik.errors.password
                        ? "w-full px-3 py-2 mb-3 text-sm leading-tight border rounded shadow appearance-none border-red-500 text-red-900 placeholder-red-700 focus:outline-none focus:ring-red-500  focus:border-red-500 block"
                        : "w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-gray-300 rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-blue-500"
                    }
                    id="password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <p className="text-xs italic text-red-500">
                      {formik.errors.password}
                    </p>
                  ) : null}
                </div>

                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-[#4fba81] rounded-full hover:bg-[#48a573] focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Đăng nhập
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <LoginGoogle />

                <div className="text-center mt-4">
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400 ">
                    Bạn có sẵn sàng tạo một tài khoản?
                    <Link
                      to={"/register"}
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Đăng ký
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
