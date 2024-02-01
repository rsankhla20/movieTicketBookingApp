import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  testing: "hello ",
};

const dataSlice = createSlice({
  name: "movieData",
  initialState,
  reducers: {
    setAllData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setAllData } = dataSlice.actions;

export default dataSlice.reducer;
