import React from 'react';

const MoonsListItem = ({moon, onMoonSelect}) => {
    const handleMoonClick = (clickedMoon) => {
        onMoonSelect(clickedMoon)
    }

    return (
        <li onClick={() => {handleMoonClick(moon)}}>
        {moon.name}
        </li>
    )
}

export default MoonsListItem;