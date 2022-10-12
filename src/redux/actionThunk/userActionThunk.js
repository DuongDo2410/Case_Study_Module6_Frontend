import { createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../../api/user.api";
import authapi from "../../api/auth.api";

export const getUserById = createAsyncThunk("user/getUserById", async () => {
  let token = localStorage.getItem("accessToken");
  const { data } = await userApi.getUserById(token);
  return data;
});

export const updateUserAction = createAsyncThunk(
  "user/updateUser",
  async (payload) => {
    const { data } = await userApi.update(payload.user);
    return data;
  }
);

export const changePasswordAction = createAsyncThunk(
  "user/changePassword",
  async (payload) => {
    let token = localStorage.getItem("accessToken");
    const { data } = await userApi.changePassword(payload, token);
    return data;
  }
);
export const loginGoogleAction = createAsyncThunk(
    "user/loginGoogle",
    async (user) => {
        const res = await userApi.loginGoogle(user);
        return res.data;
    }
);
export const getStatistic = createAsyncThunk(
    "user/getStatistic",
    async () => {
        const res = await userApi.getStatistic();
        return res.data;
    }
);
