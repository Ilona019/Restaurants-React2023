import { Title } from '../Title/component';
import { Menu } from '../Menu/component';
import { Reviews } from '../Reviews/component';

export const Restaurant = ({ data }) => {
    return (
        <div>
            <Title name={data.name}/>
            <Menu menu={data.menu}/>
            <Reviews reviews={data.reviews}/>
        </div>
    );
};