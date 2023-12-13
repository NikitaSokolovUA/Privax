import { createSelector } from "reselect";

export const selectWalletId = (state) => state.wallet.walletId;
export const selectLoading = (state) => state.wallet.loading;

export const selectWallet = createSelector(
  (state) => state.wallet.walletId,
  (state) => state.wallet.walletAddress,
  (walletId, walletAddress) => ({ walletId, walletAddress })
);

export const selectIsWallet = (state) =>
  Boolean(state.wallet.walletId || state.wallet.walletAddress);

export const selectWalletAddress = (state) => {
  const walletAddress = state.wallet.walletAddress;
  if (!walletAddress || walletAddress.length < 10) {
    return walletAddress;
  }

  const firstFive = walletAddress.slice(0, 5);
  const lastFive = walletAddress.slice(-5);

  return `${firstFive}...${lastFive}`;
};

export const selectBridgeBalance = (state) => state.wallet.bridgeBalance;

export const selectAztecBalance = (state) => state.wallet.aztecBalance;
