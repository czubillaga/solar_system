import React from "react";
import MoonListItem from "./MoonsListItem"


const MoonList = ({ moons, onMoonSelect}) =>{
    const moonItems = moons.map((moon, index) => {
        return <MoonListItem moon={moon} key={index} onMoonSelect={onMoonSelect}/>

    })
    return(
        <div id="moons-list">
        <h1>Moons in our Solar System</h1>
        <p>
            {moonItems}
        </p>

        </div>
    )
};

export default MoonList;