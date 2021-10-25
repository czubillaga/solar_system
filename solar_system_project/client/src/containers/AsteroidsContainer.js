import React, { useEffect, useState } from 'react'
import AsteroidsList from '../components/AsteroidsList'
import AsteroidsDetail from '../components/AsteroidsDetail'

const AsteroidsContainer = () => {

    const [asteroids, setAsteroids] = useState([])
    const [selectedAsteroid, setSelectedAsteroid] = useState(null)

    const getAsteroids = () => {
        fetch('http://localhost:5000/api/asteroids')
            .then(res => res.json())
            .then(data => setAsteroids(data))
    }

    useEffect(() => {
        getAsteroids()
    }, [])

    const onAsteroidSelect = (asteroid) => {
        setSelectedAsteroid(asteroid)
    }

    return(
        <div>
            <h1>This is the AsteroidsContainer</h1>
            <AsteroidsList asteroids={asteroids} onAsteroidSelect={onAsteroidSelect}/>
            {selectedAsteroid ? <AsteroidsDetail asteroid={selectedAsteroid}/>: null}

        </div>
    )
}

export default AsteroidsContainer