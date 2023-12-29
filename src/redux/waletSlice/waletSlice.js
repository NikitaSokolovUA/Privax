import { createSlice } from "@reduxjs/toolkit";
import { createWallet } from "./operations/createWallet";
import { getBridgeBalance } from "./operations/getBridgeBalance";
import { getAztecBalance } from "./operations/getAztecBalance";

const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    walletId: null,
    walletAddress: "",
    bridgeBalance: null,
    aztecBalance: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createWallet.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createWallet.fulfilled, (state, action) => {
        state.walletId = action.payload.data.walletId;
        state.walletAddress = action.payload.data.walletAddress;
        state.loading = false;
      })
      .addCase(createWallet.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getBridgeBalance.fulfilled, (state, action) => {
        state.bridgeBalance = action.payload.data;
      })
      .addCase(getAztecBalance.fulfilled, (state, action) => {
        state.aztecBalance = action.payload.data;
      });
  },
});

export const walletReducer = walletSlice.reducer;
