import React from "react";
import AsteroidListItem from "./AsteroidsListItem"


const AsteroidList = ({ asteroids, onAsteroidSelect}) =>{
    const asteroidItems = asteroids.map((asteroid, index) => {
        return <AsteroidListItem asteroid={asteroid} key={index} onAsteroidSelect={onAsteroidSelect}/>

    })
    return(
        <div id="asteroids-list">
        <h1>Some random Asteroids</h1>
        <p>
            {asteroidItems}
        </p>

        </div>
    )
};

export default AsteroidList;