import React, { useState } from "react";
import '../App.css';

const PlanetsBackgroundDetail = () => {

    const [video, setVideo] = useState();

    const planets = [{
        name: 'mercury',
        videoUrl: 'https://www.youtube.com/embed/rX_NCCpw5Uo',
        description: 'Visit Mercury to learn more!'

    },
    {
        name: 'venus',
        videoUrl: 'https://www.youtube.com/embed/5v5prMW3AzA',
        description: 'Visit Venus to learn more!'
    },
    {
        name: 'earth',
        videoUrl: "https://www.youtube.com/embed/v9CRt3-bns0",
        description: 'Visit Earth to learn more!'
    },
    {
        name: 'mars',
        videoUrl: 'https://www.youtube.com/embed/H19V4w2P7fE',
        description: 'Visit Mars to learn more!'
    },
    {
        name: 'jupiter',
        videoUrl: 'https://www.youtube.com/embed/PtkqwslbLY8',
        description: 'Visit Jupiter to learn more!'
    },
    {
        name: 'saturn',
        videoUrl: 'https://www.youtube.com/embed/vlb-b5ch81k',
        description: 'Visit Saturn to learn more!'
    },
    {
        name: 'uranus',
        videoUrl: 'https://www.youtube.com/embed/m4NXbFOiOGk',
        description: 'Visit Uranus to learn more!'
    }, {
        name: 'neptune',
        videoUrl: 'https://www.youtube.com/embed/NStn7zZKXfE',
        description: 'Visit Neptune to learn more!'
    }]

    return (
        <>
            <div className='space'>
                {planets.map((planet) => <PlanetComponenet selectVideo={setVideo} planet={planet} />)}

            </div>

            {video &&
                <iframe width="640" height="360" src={`${video}?autoplay=1`} title="YouTube video player" frameborder="0" autoplay allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            }

            {!video &&
                <h1>Please select a planet</h1>
            }
        </>
    )
}

export default PlanetsBackgroundDetail;

const PlanetComponenet = ({ selectVideo, planet }) => {

    const onPress = () => {
        selectVideo(planet.videoUrl);
    }

    return (
        <div className={`${planet.name}`} onClick={onPress}>
            <p className={`${planet.name}_p`}>{planet.description}</p>
        </div>
    )
}