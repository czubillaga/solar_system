import React from 'react';
import './Details.css';
import { Link } from "react-router-dom";


const PlanetsDetail = ({ planet }) => {

    const planetMoons = planet.moons.map((moon) => {
        return moon.name
    }).join(", ")

    const name = function () {
        if (planet.altnames === "") {
            return <p>No known other names</p>
        } else {
            return <p>{planet.altnames}</p>
        }
    }

    const moons = function () {
        if (planet.moons.length === 0) {
            return <p>Has no moons!</p>
        } else {
            return <a href="/moons">{planetMoons}</a>
        }
    }

    return (
        <div className="planets-detail">
            <h1>{planet.name}</h1>
            <h3>Alternative Names:</h3>
            {name()}
            <h3>Famous Moons:</h3>
            {moons()}
            <h4>Surface Temperature:</h4>
            {planet.temp}
            <h4>Gravity:</h4>
            {planet.gravity}
            <h4>Distance from Sun:</h4>
            {planet.distance} km
            <ul className="list">
                <li>{planet.trivia1}</li>
                <li>{planet.trivia2}</li>
                <li>{planet.trivia3}</li>
            </ul>
            <img src={planet.image_url} width="300" id="planet" />
        </div>
    )
}

export default PlanetsDetail;