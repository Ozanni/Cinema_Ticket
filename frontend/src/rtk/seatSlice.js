import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const seatSlice = createSlice({
  name: "seat",
  initialState,
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { add } = seatSlice.actions;

export default seatSlice.reducer;
