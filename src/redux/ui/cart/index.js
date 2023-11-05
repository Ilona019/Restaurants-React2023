import { createSlice } from "@reduxjs/toolkit";

const { reducer, actions } = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    increment: (state, { payload }) => {
      state[payload.id] = {
        amount: (state[payload.id]?.amount || 0) + 1,
        dish: payload,
      };
    },
    decrement: (state, { payload }) => {
      state[payload.id] = {
        amount: (state[payload.id]?.amount || 0) > 0 ? state[payload.id]?.amount - 1 : 0,
        dish: payload,
      };
    },
  },
});

export default reducer;
export { actions as cartActions };
