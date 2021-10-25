import React, { useEffect, useState } from 'react'
import PlanetList from '../components/PlanetsList'
import PlanetsDetail from '../components/PlanetsDetail'
import SearchBar from '../components/SearchBar'

const PlanetsContainer = () => {

    const [planets, setPlanets] = useState([])
    const [selectedPlanet, setSelectedPlanet] = useState(null)

    const getPlanets = () => {
        fetch('http://localhost:5000/api/planets')
            .then(res => res.json())
            .then(data => setPlanets(data))
    }

    useEffect(() => {
        getPlanets()
    }, [])

    const onPlanetSelect = (planet) => {
        setSelectedPlanet(planet)
    }

    return(
        <div>
            <h1>This is the PlanetsContainer</h1>
            <SearchBar onPlanetSelect={onPlanetSelect} planets={planets} />
            <PlanetList planets={planets} onPlanetSelect={onPlanetSelect}/>
            {selectedPlanet ? <PlanetsDetail planet={selectedPlanet}/>: null}

        </div>
    )
}

export default PlanetsContainer