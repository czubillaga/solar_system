import React from "react";
import PlanetListItem from "./PlanetsListItem"


const PlanetList = ({ planets, removePlanet}) =>{
    const planetItems = planets?.map((planet, index) => {
        return <PlanetListItem planet={planet} key={index} removePlanet={removePlanet}/>

    })
    return(
        <div id="planets-list">
        <h2>Planets</h2>
        <p>
            {planetItems}
        </p>

        </div>
    )
};

export default PlanetList;