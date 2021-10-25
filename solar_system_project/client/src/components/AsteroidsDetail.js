import React from 'react';


const AsteroidsDetail = ({asteroid}) => {

    const impact = function(){
        if (asteroid.impact == null){
            return <p>We'll probably be fine</p>
        } else {
           return <p>{asteroid.impact}</p>
        }
    }

    return(
        <div id="asteroids-detail">
            <h1>{asteroid.name}</h1>
            <h2>Year of Discovery: {asteroid.discovered}</h2>
            <p>Chances of hitting Earth: {impact()}</p>
            <p>How long does a year last? {asteroid.year}</p>
            <img src={asteroid.image_url} width="300"/>
        </div>
    )

}

export default AsteroidsDetail;