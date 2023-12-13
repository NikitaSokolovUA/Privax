import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBridgeBalance = createAsyncThunk(
  "wallet/bridgeBalances",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/bridgeBalances");

      return response.data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
