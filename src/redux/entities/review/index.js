import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { createReview } from "./thunks/create-review";
import { getReviewsByRestaurantIdIfNotExist } from "../../entities/review/thunks/get-reviews-by-restaurant-id";

const reviewEntityAdapter  = createEntityAdapter();

const { reducer } = createSlice({
  name: "review",
  initialState: reviewEntityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder
    .addCase(createReview.fulfilled, (state, { payload } = {}) => {
      reviewEntityAdapter.addOne(state, payload);
    }).addCase(
      getReviewsByRestaurantIdIfNotExist.fulfilled,
      (state, { payload } = {}) => {
        reviewEntityAdapter.setMany(state, payload);
      }
    )
});

export default reducer;
