const selectRestaurantModule = (state) => state.restaurant;

export const selectRestaurantById = (state, id) => 
   selectRestaurantModule(state).entities[id];

export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;

export const selectFirstRestaurantId = (state) => selectRestaurantIds(state)[0];
