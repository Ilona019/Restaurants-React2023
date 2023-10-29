import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getReviewsByRestaturantIdIfNotExist } from "../../entities/review/thunks/get-reviews-by-restaurant-id";
import { REQUEST_STATUS } from "../../../constants/statuses";

const entityAdapter = createEntityAdapter();

const { reducer } = createSlice({
    name: "dish",
    initialState: entityAdapter.getInitialState({
        status: REQUEST_STATUS.idle
    }),
    extraReducers: (builder) =>
    builder
      .addCase(getReviewsByRestaturantIdIfNotExist.pending, (state) => {
        state.status = REQUEST_STATUS.pending;
      })
      .addCase(getReviewsByRestaturantIdIfNotExist.fulfilled, (state, { payload }) => {
        entityAdapter.setMany(state, payload);
        state.status = REQUEST_STATUS.fulfilled;
      })
      .addCase(getReviewsByRestaturantIdIfNotExist.rejected, (state) => {
        state.status = REQUEST_STATUS.rejected;
      }),
});

export default reducer;
