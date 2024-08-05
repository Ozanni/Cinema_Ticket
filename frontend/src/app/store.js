import { configureStore } from "@reduxjs/toolkit";
import showReducer from "../rtk/showSlice";
import seatReducer from "../rtk/seatSlice";
import { api } from "../rtk/api";

export const store = configureStore({
  reducer: {
    show: showReducer,
    seat: seatReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(api.middleware),
});
