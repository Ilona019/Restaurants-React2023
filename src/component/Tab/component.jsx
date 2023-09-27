import { Button } from '../Button/component';

export const Tab = ({ indexTab, name, onClick }) => {
    return (
        <Button title={name} onClick={() => onClick(indexTab)}/>
    );
};
