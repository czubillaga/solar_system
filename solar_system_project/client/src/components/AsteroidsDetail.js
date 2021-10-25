import React from 'react';


const AsteroidsDetail = ({asteroid}) => {

    return(
        <div id="asteroids-detail">
            <h1>{asteroid.name}</h1>
            <h2>Year of Discovery: {asteroid.discovered}</h2>
            <p>Chances of hitting Earth: {asteroid.impact}</p>
            <p>How long does a year last? {asteroid.year}</p>
            <img src={asteroid.image_url}/>
        </div>
    )

}

export default AsteroidsDetail;