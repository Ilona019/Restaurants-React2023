import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import{ REQUEST_STATUS } from "../../../constants/statuses";
import { getDish } from "../../entities/dish/thunks/get-dish";

const entityAdapter = createEntityAdapter();

const { reducer } = createSlice({
    name: "dish",
    initialState: entityAdapter.getInitialState({
        status: REQUEST_STATUS.idle
    }),
    extraReducers: (builder) =>
    builder
      .addCase(getDish.pending, (state) => {
        state.status = REQUEST_STATUS.pending;
      })
      .addCase(getDish.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
        state.status = REQUEST_STATUS.fulfilled;
      })
      .addCase(getDish.rejected, (state) => {
        state.status = REQUEST_STATUS.rejected;
      }),
});

export default reducer;
