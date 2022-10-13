import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../../redux/actionThunk/authActionThunk";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { setStatusAuthActionIdle } from "../../redux/slide/authSlide";

export function RegisterPage() {
  const navigate = useNavigate();
  const disPatch = useDispatch();
  let { status } = useSelector((state) => state.auth);

  useEffect(() => {
    if (status === "fulfilled") {
      disPatch(setStatusAuthActionIdle());
      navigate("/login");
    }
  }, [status]);

  const formik = useFormik({
    initialValues: {
      username: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      role: "",
    },

    validationSchema: Yup.object({
      username: Yup.string().required("Không để trống"),
      phoneNumber: Yup.number()
        .typeError("Chỉ bao gồm các số từ 0-9")
        .integer("Số điện thoại không được bao gồm dấu thập phân")
        .required("Không để trống"),
      password: Yup.string()
        .min(6, "Tối thiểu 6 ký tự")
        .max(8, "Tối đa 8 ký tự")
        .required("Không để trống"),
      confirmPassword: Yup.string()
        .required("Không để trống")
        .oneOf([Yup.ref("password"), null], "Mật khẩu không khớp"),
      role: Yup.string().required("Không để trống"),
    }),
    onSubmit: (values) => {
      values.avatar =
        "https://firebasestorage.googleapis.com/v0/b/shop-11594.appspot.com/o/image%2Favatar.jpg?alt=media&token=0cf016f4-f295-4d46-942f-ae8a8a79c53d";
      disPatch(registerAction(values));
      disPatch(setStatusAuthActionIdle());
    },
  });

  return (
    <>
      <div className="container mx-auto mb-12">
        <div className="flex justify-center px-6 my-12 pb-12">
          {/* Row */}
          <div className="w-full xl:w-3/4 lg:w-11/12 flex shadow-lg shadow-slate-500 rounded-lg">
            {/* Col */}
            <div
              className=" h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg object-cover"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/shop-11594.appspot.com/o/image%2Fsky-landscape-lake-tree.jpg?alt=media&token=31cedbca-9dae-4a06-ae32-4850c88f9666")',
              }}
            />
            {/* Col */}
            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center">Đăng ký</h3>
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
                    htmlFor="phoneNumber"
                  >
                    Số điện thoại
                  </label>
                  <input
                    className={
                      formik.touched.phoneNumber && formik.errors.phoneNumber
                        ? "w-full px-3 py-2 mb-3 text-sm leading-tight border rounded shadow appearance-none border-red-500 text-red-900 placeholder-red-700 focus:outline-none focus:ring-red-500  focus:border-red-500 block"
                        : "w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-gray-300 rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-blue-500"
                    }
                    id="phoneNumber"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phoneNumber}
                  />
                  {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                    <p className="text-xs italic text-red-500">
                      {formik.errors.phoneNumber}
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
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="confirmPassword"
                  >
                    Nhập lại mật khẩu
                  </label>
                  <input
                    className={
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                        ? "w-full px-3 py-2 mb-3 text-sm leading-tight border rounded shadow appearance-none border-red-500 text-red-900 placeholder-red-700 focus:outline-none focus:ring-red-500  focus:border-red-500 block"
                        : "w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-gray-300 rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-blue-500"
                    }
                    id="confirmPassword"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                  />
                  {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword ? (
                    <p className="text-xs italic text-red-500">
                      {formik.errors.confirmPassword}
                    </p>
                  ) : null}
                </div>

                <div className="mb-10 ">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="confirmPassword"
                  >
                    Chức năng
                  </label>
                  <div className="flex items-center mt-2">
                    <div className="flex items-center mr-20">
                      <input
                        id="default-radio-1"
                        type="radio"
                        defaultValue
                        name="role"
                        className={
                          formik.touched.role && formik.errors.role
                            ? "w-4 h-4 text-red-500 bg-red-500 border-red-500 "
                            : "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                        }
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value="user"
                      />

                      <label
                        htmlFor="default-radio-1"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Người thuê nhà
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="default-radio-2"
                        type="radio"
                        defaultValue
                        name="role"
                        valu
                        className={
                          formik.touched.role && formik.errors.role
                            ? "w-4 h-4 text-red-500 bg-red-500 border-red-500 "
                            : "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                        }
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value="owner"
                      />
                      <label
                        htmlFor="default-radio-2"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Chủ nhà
                      </label>
                    </div>
                  </div>
                  {formik.touched.role && formik.errors.role ? (
                    <p className="text-xs italic text-red-500 mt-2">
                      {formik.errors.role}
                    </p>
                  ) : null}
                </div>

                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-[#4fba81] rounded-full hover:bg-[#48a573] focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Đăng ký
                  </button>
                </div>
                <hr className="mb-6 border-t" />

                <div className="text-center">
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400 ">
                    Bạn có sẵn một tài khoản?
                    <Link
                      to={"/login"}
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Đăng nhập
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
