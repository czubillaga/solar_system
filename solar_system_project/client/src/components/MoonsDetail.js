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
            <h2>Planet:</h2><Link to={moon.planet}>{moon.planet}</Link>
            {/* <h2>Planet: {moon.planet}</h2> */}
            <p>{moon.trivia}</p>
            <img src={moon.image_url} width="300" />
        </div>
    )

}

export default MoonsDetail;