import React from 'react';


const PlanetsDetail = ({planet}) => {

    const planetMoons = planet.moons.map((moon) => {
        return moon.name
    }).join(", ")

    return(
        <div id="planets-detail">
            <h1>{planet.name}</h1>
            <h2>Also known as: {planet.altnames}</h2>
            <h3>Famous Moons:</h3>
            <p>{planetMoons}</p>
            <p>Surface Temperature: {planet.temp}</p>
            <p>Gravity: {planet.gravity}</p>
            <p>Distance from Sun: {planet.distance} km</p>
            <img src={planet.image_url}/>
        </div>
    )

}

export default PlanetsDetail;