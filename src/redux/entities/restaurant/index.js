import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import{ REQUEST_STATUS } from "../../../constants/statuses";
import { getRestaurants } from "../../entities/restaurant/thunks/get-restaurants";

const entityAdapter = createEntityAdapter({
    //selectId: ({restaurantId}) => restaurantId
});

const { reducer } = createSlice({
    name: "restaurant",
    initialState: entityAdapter.getInitialState({
        status: REQUEST_STATUS.idle
    }),
    extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.pending, (state) => {
        state.status = REQUEST_STATUS.pending;
      })
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
        state.status = REQUEST_STATUS.fulfilled;
      })
      .addCase(getRestaurants.rejected, (state) => {
        state.status = REQUEST_STATUS.rejected;
      }),
});

export default reducer;
