import React from 'react';

const planetsListItem = ({planet, onPlanetSelect}) => {
    const handlePlanetClick = (clickedPlanet) => {
        onPlanetSelect(clickedPlanet)
    }

    return (
        <li onClick={() => {handlePlanetClick(planet)}}>
        {planet.name}
        </li>
    )
}

export default planetsListItem;

