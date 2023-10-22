import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getReviewsByRestaurantIdIfNotExist } from "../../entities/review/thunks/get-reviews-by-restaurant-id";

const reviewEntityAdapter  = createEntityAdapter();

const { reducer } = createSlice({
  name: "dish",
  initialState: reviewEntityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(
      getReviewsByRestaurantIdIfNotExist.fulfilled,
      (state, { payload } = {}) => {
        reviewEntityAdapter.setMany(state, payload);
      }
    ),
});

export default reducer;
