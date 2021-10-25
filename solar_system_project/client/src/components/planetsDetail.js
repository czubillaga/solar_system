import React from 'react';


const PlanetsDetail = ({planet}) => {

    const planetMoons = planet.moons.map((moon) => {
        return moon.name
    }).join(", ")

    const name = function(){
        if (planet.altnames === ""){
            return <p>No known other names</p>
        } else {
           return <p>{planet.altnames}</p>
        }
    }

    const moons = function() {
        if (planet.moons.length === 0){
            return <p>Has no moons</p>
        } else {
           return <p>{planetMoons}</p>
        }
    }

    return(
        <div id="planets-detail">
            <h1>{planet.name}</h1>
            <h3>Also known as: {name()}</h3>
            <h3>Famous Moons: {moons()}</h3>
            <h4>Surface Temperature: {planet.temp}</h4>
            <p>Gravity: {planet.gravity}</p>
            <p>Distance from Sun: {planet.distance} km</p>
            <ul>
            <li>{planet.trivia1}</li>
            <li>{planet.trivia2}</li>
            <li>{planet.trivia3}</li>
            </ul>
            <img src={planet.image_url} width="300" />
        </div>
    )
}

export default PlanetsDetail;