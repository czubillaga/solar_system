import React from 'react';
import './Details.css';
import { Link } from "react-router-dom";


const PlanetsDetail = ({ planet }) => {

    const planetMoons = planet.moons.map((moon) => {
        return moon.name
    }).join(", ")

    const name = function () {
        if (planet.altnames === "") {
            return <h2>No known other names</h2>
        } else {
            return <h2>{planet.altnames}</h2>
        }
    }

    const moons = function () {
        if (planet.moons.length === 0) {
            return <h2>Has no moons!</h2>
        } else {
            return <a href="/moons" id="links">{planetMoons}</a>
        }
    }

    return (
        <div className="planets-detail">
            <h1>{planet.name}</h1>
<<<<<<< HEAD
    <h3>Alternative Names:</h3>
    { name() }
    <h3>Famous Moons:</h3>
    { moons() }
    <h4>Surface Temperature:</h4>
    { planet.temp }
    <h4>Gravity:</h4>
    { planet.gravity }
    <h4>Distance from Sun:</h4>
    { planet.distance } km
=======
            <h3>Alternative Names: {name()}</h3>
            <h3>Famous Moons:</h3>
                {moons()}
            <h3>Surface Temperature:</h3>
                {planet.temp}
            <h3 id="info">Gravity:</h3>
                {planet.gravity}
            <h3 id="info">Distance from Sun:</h3>
                {planet.distance} km
>>>>>>> develop
        < ul className = "list" >
                <p>{planet.trivia1}</p>
                <p>{planet.trivia2}</p>
                <p>{planet.trivia3}</p>
            </ul >
    <img src={planet.image_url} width="300" id="planet" />
        </div >
    )
}

export default PlanetsDetail;