import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const showSlice = createSlice({
  name: "show",
  initialState,
  reducers: {
    updateShowID: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateShowID } = showSlice.actions;

export default showSlice.reducer;
