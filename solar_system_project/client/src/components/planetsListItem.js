import React from 'react';

const PlanetsListItem = ({planet, onPlanetSelect}) => {
    const handlePlanetClick = (clickedPlanet) => {
        onPlanetSelect(clickedPlanet)
    }

    return (
        <li onClick={() => {handlePlanetClick(planet)}}>
        {planet.name}
        </li>
    )
}

export default PlanetsListItem;

