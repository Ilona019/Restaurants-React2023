export const loggerMiddleware = (store) => (next) => (action) => {
    console.log(action);

    next(action);
    //const state = store.getState();
    //const restaurants = selectRestaurantIds();
}