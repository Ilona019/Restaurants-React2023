import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishIds } from "../selectors";

export const getDish = createAsyncThunk(
"dish/getDish",
async (dishId) => {
    const response = fetch(`http://localhost:3001/api/dish/${dishId}`);
    return (await response).json();
}, {
    condition: (_, { getState }) => !selectDishIds(getState())?.length,
});
