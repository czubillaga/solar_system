import React from 'react';
import './Details.css';


const AsteroidsDetail = ({asteroid}) => {

    const impact = function(){
        if (asteroid.impact == null){
            return <p>We'll probably be fine...</p>
        } else {
           return <p>{asteroid.impact}</p>
        }
    }

    return(
        <div className="asteroids-detail">
            <h1>{asteroid.name}</h1>
            <h2>Year of Discovery: {asteroid.discovered}</h2>
            <h3>Chances of hitting Earth: {impact()}</h3>
            <p>How long does a year last? {asteroid.year}</p>
            <img src={asteroid.image_url} width="300" id="asteroid"/>
        </div>
    )

}

export default AsteroidsDetail;