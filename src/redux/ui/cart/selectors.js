const selectCartModule = (state) => state.cart;

export const selectDishAmountById = (state, dishId) => selectCartModule(state)[dishId]?.amount || 0;

export const selectCartDishes = (state) =>
  Object.entries(selectCartModule(state)).reduce((acc, [dishId, dishData]) => {
    console.log(dishId)
    if (dishData.amount > 0) {
      acc.push(dishData.dish);
    }
    return acc;
  }, []);
  
