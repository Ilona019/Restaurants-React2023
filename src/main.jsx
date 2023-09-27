import React from 'react';
import ReactDOM from 'react-dom/client';
import { restaurants } from './constants/mock';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
const menuFirst = restaurants[0].menu;
const menuSecond = restaurants[1].menu;
const menuThird = restaurants[2].menu;
const menuForth = restaurants[3].menu;
const reviewsFirst = restaurants[0].reviews;
const reviewsSecond = restaurants[1].reviews;
const reviewsThird = restaurants[2].reviews;
const reviewsForth = restaurants[3].reviews;
root.render(
    <div>
        <div>
            <h1 align="center">{restaurants[0].name}</h1>
            <h2>Menu</h2>
            <ul>
                <li>{menuFirst[0].name}</li>
                <li>{menuFirst[1].name}</li>
                <li>{menuFirst[2].name}</li>
            </ul>
            <h2>Reviews</h2>
            <ul type="square">
                <li>{reviewsFirst[0].text}</li>
                <li>{reviewsFirst[1].text}</li>
            </ul>
        </div>
        <hr/>
        <div>
            <h1 align="center">{restaurants[1].name}</h1>
            <h2>Menu</h2>
            <ul>
                <li>{menuSecond[0].name}</li>
                <li>{menuSecond[1].name}</li>
            </ul>
            <h2>Reviews</h2>
            <ul type="square">
                <li>{reviewsSecond[0].text}</li>
                <li>{reviewsSecond[1].text}</li>
                <li>{reviewsSecond[2].text}</li>
            </ul>
        </div>
        <hr/>
        <div>
            <h1 align="center">{menuThird[2].name}</h1>
            <h2>Menu</h2>
            <ul>
                <li>{menuThird[0].name}</li>
                <li>{menuThird[1].name}</li>
                <li>{menuThird[2].name}</li>
            </ul>
            <h2>Reviews</h2>
            <ul type="square">
                <li>{reviewsThird[0].text}</li>
            </ul>
        </div>
        <hr/>
        <div>
            <h1 align="center">{restaurants[3].name}</h1>
            <h2>Menu</h2>
            <ul>
                <li>{menuForth[0].name}</li>
                <li>{menuForth[1].name}</li>
            </ul>
            <h2>Reviews</h2>
            <ul type="square">
                <li>{reviewsForth[0].text}</li>
                <li>{reviewsForth[1].text}</li>
            </ul>
        </div>
    </div>
);
