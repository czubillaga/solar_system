import React from 'react';
import './Details.css';
import { Link } from "react-router-dom";


const MoonsDetail = ({moon}) => {

    return(
        <div className="moons-detail">
            <h1>{moon.name}</h1>
            <h2 id="heading">Planet:</h2>
            <h1><Link to="/planets" id="links">{moon.planet}</Link></h1>
            <p>{moon.trivia}</p>
            <img src={moon.image_url} width="300" id="moon"/>
        </div>
    )

}

export default MoonsDetail;