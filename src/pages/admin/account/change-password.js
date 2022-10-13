import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  changePasswordAction,
  setStatusUserAction,
} from "../../../redux/actionThunk/userActionThunk";
import { Avatar } from "@mui/material";
import TextField from "@mui/material/TextField";
export function ChangePasswordOwner() {
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
    <div className="w-full bg-white p-5 min-h-[550px] h-max ">
      <div className="flex justify-between border-b pb-6 items-center">
        <h4 className="text-2xl">Thay đổi mật khẩu</h4>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                margin: "10px",
                width: "900px",
                paddingTop: "30px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "left",
                  margin: " 20px 7px",
                }}
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
                style={{
                  display: "flex",
                  alignItems: "left",
                  margin: " 20px 7px",
                }}
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
                style={{
                  display: "flex",
                  alignItems: "left",
                  margin: " 20px 7px",
                }}
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
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                      ? formik.errors.confirmPassword
                      : ""
                  }
                  helperText={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                      ? formik.errors.fullName
                      : ""
                  }
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "left",
                  margin: " 20px 7px",
                }}
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
