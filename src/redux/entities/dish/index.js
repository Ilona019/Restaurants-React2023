import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getDishesByRestaurantIdIfNotExist } from "../../entities/dish/thunks/get-dishes-by-restaurant-id";

const dishEntityAdapter = createEntityAdapter();

const { reducer } = createSlice({
  name: "dish",
  initialState: dishEntityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(
      getDishesByRestaurantIdIfNotExist.fulfilled,
      (state, { payload } = {}) => {
        dishEntityAdapter.setMany(state, payload);
      }
    ),
});

export default reducer;
