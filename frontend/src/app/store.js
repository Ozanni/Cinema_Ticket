import { configureStore } from "@reduxjs/toolkit";
import showReducer from "../rtk/showSlice";
import seatReducer from "../rtk/seatSlice";

export const store = configureStore({
  reducer: {
    show: showReducer,
    seat: seatReducer,
  },
});
