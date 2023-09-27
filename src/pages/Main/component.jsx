
import React from 'react';
import {restaurants} from '../../constants/mock';
import { Tab } from '../../component/Tab/component';
import { Restaurant } from '../../component/Restaurant/component';
import { useState } from 'react';

export const MainPage = () => {
    if (!restaurants?.length) {
        return null;
    }

    const [activeTab, setActiveTab] = useState(0);
    const onClickTab = (indexTab) => {
        setActiveTab(indexTab);
    }
    return (
    <span>
        {restaurants?.length > 0 && restaurants.map(({ name, id }, index) => (
            <Tab indexTab={index} name={name} key={id} onClick={onClickTab}/>
        ))}
        <Restaurant data={restaurants[activeTab]}/>
    </span>
    );
}
