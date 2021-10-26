import React from 'react';
import './Lists.css'
import './ListItem.css'

const PlanetsListItem = ({planet, onPlanetSelect}) => {
    const handlePlanetClick = (clickedPlanet) => {
        onPlanetSelect(clickedPlanet)
    }

    return (
        <div className="list">
        <li onClick={() => {handlePlanetClick(planet)}}>
        {planet.name}
        </li>
        </div>
    )
}

export default PlanetsListItem;

