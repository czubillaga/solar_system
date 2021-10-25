import React from 'react';
import './Details.css';
import { Link } from "react-router-dom";


const MoonsDetail = ({moon}) => {

    return(
        <div className="moons-detail">
            <h1>{moon.name}</h1>
            <h2>Planet:</h2><Link to="/planets">{moon.planet}</Link>
            {/* <h2>Planet: {moon.planet}</h2> */}
            <p>{moon.trivia}</p>
            <img src={moon.image_url} width="300" id="moon"/>
        </div>
    )

}

export default MoonsDetail;