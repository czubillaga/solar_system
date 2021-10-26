import React from 'react';
import './Details.css';


const AsteroidsDetail = ({ asteroid }) => {

    const impact = function () {
        if (asteroid.impact == null) {
            return <p>We'll probably be fine...</p>
        } else {
            return <p>{asteroid.impact}</p>
        }
    }

    return (
        <div className="asteroids-detail">
            <h1>{asteroid.name}</h1>
            <h2>Year of Discovery: {asteroid.discovered}</h2>
            <h3>Chances of hitting Earth:</h3>
            {impact()}
            <h4>How long does a year last?</h4>
            {asteroid.year}
            <img src={asteroid.image_url} width="300" id="asteroid" />
        </div>
    )

}

export default AsteroidsDetail;