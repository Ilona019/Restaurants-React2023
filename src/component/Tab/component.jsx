import { Button } from "../Button/component";

export const Tab = ({indexTab, name, isActiveTab, onClick }) => {
  return <Button title={name} active={isActiveTab} fontSize='l' className='fullHeight' onClick={() => onClick(indexTab)} />;
};
