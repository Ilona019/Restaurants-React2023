import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurantsIfNotExist } from "../../entities/restaurant/thunks/get-restaurants";

const restaurantEntityAdapter = createEntityAdapter();

const { reducer } = createSlice({
  name: "restaurant",
  initialState: restaurantEntityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(
      getRestaurantsIfNotExist.fulfilled,
      (state, { payload } = {}) => {
        restaurantEntityAdapter.setAll(state, payload);
      }
    ),
});

export default reducer;
