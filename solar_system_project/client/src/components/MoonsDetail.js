import React from 'react';


const MoonsDetail = ({moon}) => {

    return(
        <div id="moons-detail">
            <h1>{moon.name}</h1>
            <h2>Planet: {moon.planet}</h2>
            <p>Surface Temperature: {moon.temp}</p>
            <p>Gravity: {moon.gravity}</p>
            <p>Distance from Sun: {moon.distance} km</p>
            <img src={moon.image_url} width="300" />
        </div>
    )

}

export default MoonsDetail;