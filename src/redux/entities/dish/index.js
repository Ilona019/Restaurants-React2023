import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import{ REQUEST_STATUS } from "../../../constants/statuses";
import { getDishesByRestaturantIdIfNotExist } from "../../entities/dish/thunks/get-dishes-by-restaurant-id";

const entityAdapter = createEntityAdapter();

const { reducer } = createSlice({
    name: "dish",
    initialState: entityAdapter.getInitialState({
        status: REQUEST_STATUS.idle
    }),
    extraReducers: (builder) =>
    builder
      .addCase(getDishesByRestaturantIdIfNotExist.pending, (state) => {
        state.status = REQUEST_STATUS.pending;
      })
      .addCase(getDishesByRestaturantIdIfNotExist.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
        state.status = REQUEST_STATUS.fulfilled;
      })
      .addCase(getDishesByRestaturantIdIfNotExist.rejected, (state) => {
        state.status = REQUEST_STATUS.rejected;
      }),
});

export default reducer;
