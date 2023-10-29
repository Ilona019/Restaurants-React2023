const selectDishModule = (state) => state.dish;

export const selectDishById = (state, id) => selectDishModule(state).entities[id];

export const selectDishIds = (state) => selectDishModule(state).ids;

export const selectDishesLoadingStatus = (state) => selectDishModule(state).status;
