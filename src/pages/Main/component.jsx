import {React, useState} from "react";
import { restaurants } from "../../constants/mock";
import { RestaurantTabs } from "../../component/RestaurantTabs/component";
import { Restaurant } from "../../component/Restaurant/component";

export const MainPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  if (!restaurants?.length) {
    return null;
  }

  return (
    <div>
      <RestaurantTabs restaurants={restaurants} onTabSelect={setActiveTab} />
      <Restaurant restaurant={restaurants[activeTab]} />
    </div>
  );
};
