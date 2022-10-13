import { Button } from "@mui/material";
import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { changePasswordAction } from "../../redux/actionThunk/userActionThunk";
import { setStatusUserActionIdle } from "../../redux/slide/userSlide";
import { useNavigate } from "react-router";
export function ChangePassword() {
  const disPatch = useDispatch();
  const navigate = useNavigate();
  let { status } = useSelector((state) => state.user);
  useEffect(() => {
    if (status === "fulfilled") {
      navigate("/login");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("currentUser");
      disPatch(setStatusUserActionIdle());
    }
  }, [status]);
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
    onSubmit: async (values, helpers) => {
      disPatch(changePasswordAction(values));
    },
  });

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <form onSubmit={formik.handleSubmit}>
          <div
            style={{ display: "flex", alignItems: "left", margin: " 20px 7px" }}
          >
            <TextField
              id="outlined-basic"
              label="Mật khẩu cũ "
              variant="outlined"
              sx={{ width: "70%" }}
              name="password"
              type="password"
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
              label="Mật khẩu mới"
              variant="outlined"
              sx={{ width: "70%" }}
              name="newPassword"
              type="password"
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
              label="Nhập lại mật khẩu"
              variant="outlined"
              sx={{ width: "70%" }}
              name="confirmPassword"
              type="password"
              onChange={formik.handleChange}
              error={
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? formik.errors.confirmPassword
                  : ""
              }
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? formik.errors.confirmPassword
                  : ""
              }
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
          </div>

          <div
            style={{ display: "flex", alignItems: "left", margin: " 20px 7px" }}
          >
            <Button variant="contained" color="success" type="submit">
              Cập nhật
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
