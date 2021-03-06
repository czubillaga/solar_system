import React from "react";
import PlanetListItem from "./PlanetsListItem"


const PlanetList = ({ planets, onPlanetSelect}) =>{
    const planetItems = planets.map((planet, index) => {
        return <PlanetListItem planet={planet} key={index} onPlanetSelect={onPlanetSelect}/>

    })
    return(
        <div id="planets-list">
        <h1>Planets in our Solar System</h1>
        <p>
            {planetItems}
        </p>
        </div>
    )
};

export default PlanetList;