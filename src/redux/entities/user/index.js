import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsersIfNotExist } from "./thunks/get-users";
import { REQUEST_STATUS } from  "../../../constants/statuses";

const userEntityAdapter = createEntityAdapter();

const { reducer } = createSlice({
  name: "user",
  initialState: userEntityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder
    .addCase(getUsersIfNotExist.pending, (state) => {
      state.status = REQUEST_STATUS.pending;
    })
    .addCase(getUsersIfNotExist.fulfilled, (state, { payload }) => {
      userEntityAdapter.setAll(state, payload);
      state.status = REQUEST_STATUS.fulfilled;
    })
    .addCase(getUsersIfNotExist.rejected, (state) => {
      state.status = REQUEST_STATUS.rejected;
    })
});

export default reducer;
