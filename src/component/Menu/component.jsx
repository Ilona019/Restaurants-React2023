import { Dish } from '../Dish/component';

export const Menu = ({ menu }) => {
    return (
        <div>{menu?.length > 0 &&
            <ul>{menu.map((dish) => 
                <li key={dish.id}><Dish dish={dish}/></li>)}
            </ul>}
        </div>
    );
};