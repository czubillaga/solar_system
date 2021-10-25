import React from 'react';


const AsteroidsDetail = ({asteroid}) => {

    const asteroids = asteroids.map((asteroid) => {
        return asteroid.name
    }).join(", ")

    return(
        <div id="asteroids-detail">
            <h1>{asteroid.name}</h1>
            {asteroid.discovered}
            <p>{asteroid.impact}</p>
            <p>{asteroid.year}</p>
            <img src={asteroid.image_url}/>
        </div>
    )

}

export default AsteroidsDetail;