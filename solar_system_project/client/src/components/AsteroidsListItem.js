import React from 'react';
import './Lists.css';

const AsteroidsListItem = ({asteroid, onAsteroidSelect}) => {
    const handleAsteroidClick = (clickedAsteroid) => {
        onAsteroidSelect(clickedAsteroid)
    }

    return (
        <div className="list">
        <li onClick={() => {handleAsteroidClick(asteroid)}}>
        {asteroid.name}
        </li>
        </div>
    )
}

export default AsteroidsListItem;