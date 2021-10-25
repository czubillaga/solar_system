import React from 'react';
import PlanetList from './PlanetsList';
import PlanetsListItem from './PlanetsListItem';
import PlanetsDetail from './PlanetsDetail';
import PlanetsContainer from '../containers/PlanetsContainer';
import { Link } from "react-router-dom";


const MoonsDetail = ({moon, planet}) => {

    return(
        <div id="moons-detail">
            <h1>{moon.name}</h1>
            <h2>Planet:</h2> 
            <a href={moon.planet}>{moon.planet}</a>
            <p>Gravity: {moon.gravity}</p>
            <p>Distance from Sun: {moon.distance} km</p>
            <img src={moon.image_url} width="300" />
        </div>
    )

}

export default MoonsDetail;