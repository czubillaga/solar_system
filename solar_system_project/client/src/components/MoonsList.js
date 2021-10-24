import React from "react";
import MoonListItem from "./MoonsListItem"


const MoonList = ({ moons, onMoonSelect}) =>{
    const moonItems = moons.map((moon, index) => {
        return <MoonListItem moon={moon} key={index} onMoonSelect={onMoonSelect}/>

    })
    return(
        <div id="planets-list">
        <h2>Moons</h2>
        <p>
            {moonItems}
        </p>

        </div>
    )
};

export default MoonList;