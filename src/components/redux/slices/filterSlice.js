import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
  status: "",
};
const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  redusers: {},
});

export const {} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
