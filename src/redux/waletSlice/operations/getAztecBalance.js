import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAztecBalance = createAsyncThunk(
  "wallet/aztecBalance",
  async (walletId, thunkAPI) => {
    try {
      const response = await axios.post("/aztecBalances", { walletId });

      return response.data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
