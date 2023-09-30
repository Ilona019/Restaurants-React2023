
import { Tab } from '../Tab/component';

export const RestaurantTabs = ({restaurants, onTabSelect}) => {
    return (
    <div>
        {restaurants.map(({ name, id }, index) => (
            <Tab key={id} indexTab={index} name={name} onClick={() => onTabSelect(index)} />
        ))}
    </div>
    );
}
