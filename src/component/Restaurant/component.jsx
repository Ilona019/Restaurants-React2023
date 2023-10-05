import { Title } from '../Title/component';
import { Menu } from '../Menu/component';
import { Reviews } from '../Reviews/component';
import styles from './styles.module.css';

export const Restaurant = ({ restaurant, className }) => {
    return (
        <div className={className}>
            <Title name={restaurant.name} type='secondary'/>
            <Menu menu={restaurant.menu} />
            <Reviews reviews={restaurant.reviews} />
        </div>
    );
};
