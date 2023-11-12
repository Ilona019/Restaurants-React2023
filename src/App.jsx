import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/Main/component";
import { Layout } from "./component/Layout/component";
import { RestaurantsPage } from "./pages/Restaurants/component";
import { RestaurantContainer } from "./component/Restaurant/container";
import { CartPage } from "./pages/Cart/component";
import store from "./redux";

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="restaurants" element={<RestaurantsPage />}>
              <Route path=":restaurantId" element={<RestaurantContainer />}/>
            </Route>
            <Route path="cart" element={<CartPage />}/>
            <Route path="*" element={<h3>404 Not fouded</h3>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};
