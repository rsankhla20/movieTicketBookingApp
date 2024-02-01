import { configureStore } from "@reduxjs/toolkit";

import dataReducer from "./dataSlice";

const store = configureStore({
  reducer: { movieData: dataReducer },
});

export default store;
