import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  changePasswordAction,
  setStatusUserAction,
} from "../../../redux/actionThunk/userActionThunk";
import {Avatar} from "@mui/material";
import TextField from "@mui/material/TextField";
export function ChangePassword() {
  const disPatch = useDispatch();
  let { status } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      password: "",
      newPassword: "",
      confirmPassword: "",
    },

    validationSchema: Yup.object({
      password: Yup.string()
        .min(6, "Tối thiểu 6 ký tự")
        .max(8, "Tối đa 8 ký tự")
        .required("Không để trống"),
      newPassword: Yup.string()
        .min(6, "Tối thiểu 6 ký tự")
        .max(8, "Tối đa 8 ký tự")
        .required("Không để trống"),
      confirmPassword: Yup.string()
        .required("Không để trống")
        .oneOf([Yup.ref("newPassword"), null], "Mật khẩu không khớp"),
    }),
    onSubmit: (values) => {
      console.log(values);
      disPatch(changePasswordAction(values));
    },
  });

  return (
    //   <div className="w-full bg-white p-5 min-h-[550px] h-max">
    //
    //   <form onSubmit={formik.handleSubmit}>
    //   <section className="bg-gray-50 dark:bg-gray-900 mt-10">
    //     <div className=" bg-[#ffffff] px-6 py-8 mx-auto md:h-screen lg:py-0 pl-16">
    //       {/*<a*/}
    //       {/*  href="#"*/}
    //       {/*  className="flex items- center mb-6 text-2xl font-semibold text-gray-900 white:text-white"*/}
    //       {/*></a>*/}
    //       <div className=" regal-write w-full md:mt-0 xl:p-0 dark:bg-white dark:border-gray-700 ">
    //         <div className="p-6 space-y-4 md:space-y-6 sm:p-8" >
    //           <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
    //             Sửa mật khẩu
    //           </h1>
    //           <div>
    //             <label
    //               htmlFor="oldPassword"
    //               className="  flex justify-start  mb-2 text-sm font-medium text-gray-900 "
    //             >
    //               Mật khẩu cũ *
    //             </label>
    //             <input
    //               type="password"
    //               name="password"
    //               id="password"
    //               className={
    //                 formik.touched.password && formik.errors.password
    //                     ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:outline-none focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-96 p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
    //                     : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-[610px]  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //               }
    //               onChange={formik.handleChange}
    //               onBlur={formik.handleBlur}
    //               value={formik.values.password}
    //             />
    //             {formik.touched.password && formik.errors.password ? (
    //               <p className="mt-2 text-sm text-red-600 dark:text-red-500">
    //                 {formik.errors.password}
    //               </p>
    //             ) : null}
    //           </div>
    //
    //           <div>
    //             <label
    //               htmlFor="newPassword"
    //               className="  flex justify-start  mb-2 text-sm font-medium text-gray-900 "
    //             >
    //               Mật khẩu *
    //             </label>
    //             <input
    //               type="password"
    //               name="newPassword"
    //               id="newPassword"
    //               className={
    //                 formik.touched.newPassword && formik.errors.newPassword
    //                   ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:outline-none focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-96 p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
    //                   : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-[610px]  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //               }
    //               onChange={formik.handleChange}
    //               onBlur={formik.handleBlur}
    //               value={formik.values.newPassword}
    //             />
    //             {formik.touched.newPassword && formik.errors.newPassword ? (
    //               <p className="mt-2 text-sm text-red-600 dark:text-red-500">
    //                 {formik.errors.newPassword}
    //               </p>
    //             ) : null}
    //           </div>
    //
    //           <div>
    //             <label
    //               htmlFor="confirmPassword"
    //               className="  flex justify-start  mb-2 text-sm font-medium text-gray-900 "
    //             >
    //               Nhập lại mật khẩu *
    //             </label>
    //             <input
    //               type="password"
    //               name="confirmPassword"
    //               id="confirmPassword"
    //               className={
    //                 formik.touched.confirmPassword &&
    //                 formik.errors.confirmPassword
    //                   ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:outline-none focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-96 p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
    //                   : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-[610px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //               }
    //               onChange={formik.handleChange}
    //               value={formik.values.confirmPassword}
    //             />
    //             {formik.touched.confirmPassword &&
    //             formik.errors.confirmPassword ? (
    //               <p className="mt-2 text-sm text-red-600 dark:text-red-500">
    //                 {formik.errors.confirmPassword}
    //               </p>
    //             ) : null}
    //           </div>
    //           <button
    //             type="submit"
    //             className="w-24 text-white bg-[#4fba81] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    //           >
    //             Lưu
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </form>
    //   </div>
      <div className="w-full bg-white p-5 min-h-[550px] h-max ">
              <h4 className="text-2xl">Thay đổi mật khẩu </h4>

        <div style={{ display: "flex", flexDirection: "column" ,paddingLeft:"60px" }}>
          <form onSubmit={formik.handleSubmit}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ margin: "10px 10px", width:"900px" ,paddingTop:"80px" }}>

                <div
                    style={{ display: "flex", alignItems: "left", margin: " 20px 7px" }}
                >
                  <TextField
                      id="outlined-basic"
                      label="Mật khẩu cũ "
                      variant="outlined"
                      sx={{ width: "70%" }}
                      name="password"
                      type="text"
                      onChange={formik.handleChange}
                      error={
                        formik.touched.password && formik.errors.password
                            ? formik.errors.password
                            : ""
                      }
                      helperText={
                        formik.touched.password && formik.errors.password
                            ? formik.errors.password
                            : ""
                      }
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                  />
                </div>
                <div
                    style={{ display: "flex", alignItems: "left", margin: " 20px 7px" }}
                >
                  <TextField
                      id="outlined-basic"
                      label="Mật khẩu mới "
                      variant="outlined"
                      sx={{ width: "70%" }}
                      name="newPassword"
                      type="text"
                      onChange={formik.handleChange}
                      error={
                        formik.touched.newPassword && formik.errors.newPassword
                            ? formik.errors.newPassword
                            : ""
                      }
                      helperText={
                        formik.touched.newPassword && formik.errors.newPassword
                            ? formik.errors.newPassword
                            : ""
                      }
                      onBlur={formik.handleBlur}
                      value={formik.values.newPassword}
                  />
                </div>
                <div
                    style={{ display: "flex", alignItems: "left", margin: " 20px 7px" }}
                >
                  <TextField
                      id="outlined-basic"
                      label="Nhập lại mật khẩu  "
                      variant="outlined"
                      sx={{ width: "70%" }}
                      name="password"
                      type="text"
                      onChange={formik.handleChange}
                      error={
                        formik.touched.confirmPassword && formik.errors.confirmPassword
                            ? formik.errors.confirmPassword
                            : ""
                      }
                      helperText={
                        formik.touched.confirmPassword && formik.errors.confirmPassword
                            ? formik.errors.fullName
                            : ""
                      }
                      onBlur={formik.handleBlur}
                      value={formik.values.confirmPassword}
                  />
                </div>
                <div
                    style={{ display: "flex", alignItems: "left", margin: " 20px 7px" }}
                >
                  <button
                      type="submit"
                      className="w-24 text-white bg-[#4fba81] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Lưu
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

            );
}
