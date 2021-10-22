import React, { useEffect, useState } from 'react'

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

    return(
        <h1>This is the PlanetsContainer!</h1>
    )
}

export default PlanetsContainer