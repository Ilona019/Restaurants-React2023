import { useSelector } from "react-redux";
import { Button } from "../Button/component";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";

export const Tab = ({ idTab, isActiveTab, onClick }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, idTab));
  return (
    <Button
      title={restaurant.name}
      active={isActiveTab}
      fontSize="l"
      className="fullHeight"
      onClick={() => onClick(idTab)} />
  );
};
