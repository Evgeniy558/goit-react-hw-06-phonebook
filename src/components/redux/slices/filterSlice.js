import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
  status: "",
};
const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  redusers: {
    setFilter(state, action) {
      return (state.state = action.payload);
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
