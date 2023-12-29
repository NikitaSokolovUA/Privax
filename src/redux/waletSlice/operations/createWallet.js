import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_API_URL;

export const createWallet = createAsyncThunk(
  "wallet/createWallet",
  async (_, thunkAPI) => {
    try {
      const response = await axios.post("/generateWallet");

      return response.data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
