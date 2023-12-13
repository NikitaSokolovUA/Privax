import { configureStore } from "@reduxjs/toolkit";
import { walletReducer } from "./waletSlice/waletSlice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "wallet",
  storage,
  whitelist: ["walletId", "walletAddress"],
};

export const store = configureStore({
  reducer: {
    wallet: persistReducer(persistConfig, walletReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
