import { Button } from "../Button/component";

export const Tab = ({ restaurantName, onClick }) => {
  return (
    <Button
      title={restaurantName}
      fontSize="l"
      className="fullSize"
      onClick={onClick} />
  );
};
