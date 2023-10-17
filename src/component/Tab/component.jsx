import { Button } from "../Button/component";

export const Tab = ({ restaurantName, isActiveTab, onClick }) => {
  return (
    <Button
      title={restaurantName}
      active={isActiveTab}
      fontSize="l"
      className="fullHeight"
      onClick={onClick} />
  );
};
