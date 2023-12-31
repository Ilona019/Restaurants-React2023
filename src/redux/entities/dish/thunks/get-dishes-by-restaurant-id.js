import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantMenuById } from "../../restaurant/selectors";
import { selectDishIds } from "../selectors";

export const getDishesByRestaurantIdIfNotExist = createAsyncThunk(
  "dish/getDishesByRestaurantIdIfNotExist",
  async (restaurantId) => {
    const response = fetch(
      `http://localhost:3001/api/dishes?restaurantId=:${restaurantId}`
    );
    return (await response).json();
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();
      const restaurantMenu = selectRestaurantMenuById(state, restaurantId);
      const dishIds = selectDishIds(state);

      return (
        restaurantMenu &&
        restaurantMenu.some((reviewId) => !dishIds.includes(reviewId))
      );
    },
  }
);
