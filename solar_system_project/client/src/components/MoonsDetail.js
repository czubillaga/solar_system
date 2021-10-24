import React from 'react';


const MoonsDetail = ({moon}) => {

    const moons = moons.map((moon) => {
        return moon.name
    }).join(", ")

    return(
        <div id="moons-detail">
            <h1>{moon.name}</h1>
            <h2>Also known as: {moon.altnames}</h2>
            <h3>Famous Moons:</h3>
            <p>Surface Temperature: {moon.temp}</p>
            <p>Gravity: {moon.gravity}</p>
            <p>Distance from Sun: {moon.distance} km</p>
            <img src={moon.image_url}/>
        </div>
    )

}

export default MoonsDetail;