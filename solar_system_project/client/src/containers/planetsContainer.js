import React, { useEffect, useState } from 'react'
import PlanetList from '../components/PlanetsList'
import PlanetsDetail from '../components/PlanetsDetail'

const PlanetsContainer = () => {

    const [planets, setPlanets] = useState([])
    const [selectedPlanet, setSelectedPlanet] = useState()

    const getPlanets = () => {
        fetch('http://localhost:5000/api/planets')
            .then(res => res.json())
            .then(data => setPlanets(data))
    }

    useEffect(() => {
        getPlanets()
    }, [])

    const onPlanetSelect = (planet) => {
        selectedPlanet(planet)
    }

    return(
        <div>
            <h1>This is the PlanetsContainer</h1>
        </div>
    )
}

export default PlanetsContainer