import React from 'react';

const AsteroidsListItem = ({asteroid, onAsteroidSelect}) => {
    const handleAsteroidClick = (clickedAsteroid) => {
        onAsteroidSelect(clickedAsteroid)
    }

    return (
        <li onClick={() => {handleAsteroidClick(asteroid)}}>
        {asteroid.name}
        </li>
    )
}

export default AsteroidsListItem;