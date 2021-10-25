import React from 'react';
import './Lists.css';

const MoonsListItem = ({moon, onMoonSelect}) => {
    const handleMoonClick = (clickedMoon) => {
        onMoonSelect(clickedMoon)
    }

    return (
        <div className="list">
        <li onClick={() => {handleMoonClick(moon)}}>
        {moon.name}
        </li>
        </div>
    )
}

export default MoonsListItem;