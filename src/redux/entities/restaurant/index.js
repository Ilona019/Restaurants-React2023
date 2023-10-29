import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurantsIfNotExist } from "../../entities/restaurant/thunks/get-restaurants";

const restaurantEntityAdapter = createEntityAdapter();

const { reducer, actions } = createSlice({
  name: "restaurant",
  initialState: restaurantEntityAdapter.getInitialState(),
  reducers: {
    addReview: (state, { payload: { restaurantId, reviewId } }) => {
      restaurantEntityAdapter.updateOne(state, {
        id: restaurantId,
        changes: {
          reviews: [...state.entities[restaurantId].reviews, reviewId],
        }
      });
    }
  },
  extraReducers: (builder) =>
    builder.addCase(
      getRestaurantsIfNotExist.fulfilled,
      (state, { payload } = {}) => {
        restaurantEntityAdapter.setAll(state, payload);
      }
    ),
});

export default reducer;
export { actions as restaurantActions };
