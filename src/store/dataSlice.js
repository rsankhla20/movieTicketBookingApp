import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  bookingData: [],
};

const dataSlice = createSlice({
  name: "movieData",
  initialState,
  reducers: {
    setAllData: (state, action) => {
      state.data = action.payload;
    },
    setBookingData: (state, action) => {
      state.bookingData = action.payload;
    },
  },
});

export const { setAllData, setBookingData } = dataSlice.actions;

export default dataSlice.reducer;
