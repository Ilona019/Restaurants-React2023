import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import{ REQUEST_STATUS } from "../../../constants/statuses";
import { getRestaurantsIfNotExist } from "../../entities/restaurant/thunks/get-restaurants";

const entityAdapter = createEntityAdapter();

const { reducer } = createSlice({
    name: "restaurant",
    initialState: entityAdapter.getInitialState({
        status: REQUEST_STATUS.idle
    }),
    extraReducers: (builder) =>
    builder
      .addCase(getRestaurantsIfNotExist.pending, (state) => {
        state.status = REQUEST_STATUS.pending;
      })
      .addCase(getRestaurantsIfNotExist.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
        state.status = REQUEST_STATUS.fulfilled;
      })
      .addCase(getRestaurantsIfNotExist.rejected, (state) => {
        state.status = REQUEST_STATUS.rejected;
      }),
});

export default reducer;
