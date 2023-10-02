import { Title } from '../Title/component';
import { Menu } from '../Menu/component';
import { Reviews } from '../Reviews/component';

export const Restaurant = ({ restaurant }) => {
    return (
        <div>
            <Title name={restaurant.name} />
            <Menu menu={restaurant.menu} />
            <Reviews reviews={restaurant.reviews} />
        </div>
    );
};
