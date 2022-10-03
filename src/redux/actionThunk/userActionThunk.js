import { createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../../api/user.api";

export const getUserById = createAsyncThunk("user/getUserById", async () => {
  let token = localStorage.getItem("accessToken");
  const { data } = await userApi.getUserByIb(token);
  return data;
});

export const updateUserAction = createAsyncThunk(
  "user/updateUser",
  async (payload) => {
    console.log("aaaaaaaaaaaaaaaaaaaaa", payload);
    const { data } = await userApi.update(payload.id, payload.user);
    return data;
  }
);
