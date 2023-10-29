import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantReviewsById } from "../../restaurant/selectors";
import { selectReviewIds } from "../selectors";

export const getReviewsByRestaturantIdIfNotExist = createAsyncThunk(
"dish/getReviewsByRestaturantIdIfNotExist",
async (restaurantId) => {
    const response = fetch(`http://localhost:3001/api/reviews?restaurantId=:${restaurantId}`);
    return (await response).json();
}, {
    condition: (restaurantId, { getState }) => {
      const state = getState();
      const restaurantReviews = selectRestaurantReviewsById(
        state,
        restaurantId
      );
      const reviewIds = selectReviewIds(state);

      return (
        restaurantReviews &&
        restaurantReviews.some((reviewId) => !reviewIds.includes(reviewId))
      );
    }
});
