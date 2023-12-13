import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://167.235.234.132:8000";

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
