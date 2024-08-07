import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: [],
  totalPrice: 0,
};

export const seatSlice = createSlice({
  name: "seat",
  initialState,
  reducers: {
    add: (state, action) => {
      state.name.push(action.payload.seat_name);
      state.totalPrice += action.payload.price;
    },
    remove: (state, action) => {
      // state.name.splice(state.name.indexOf(action.payload.seat_name), 1);
      const arrayName = state.name.filter(
        (name) => name != action.payload.seat_name
      );
      state.name = arrayName;
      state.totalPrice -= action.payload.price;
    },
  },
});

export const { add, remove } = seatSlice.actions;

export default seatSlice.reducer;
