import React, { useState } from "react";

const SearchBar = ({onPlanetSelect, planets}) => {

    const [query, setQuery] = useState('')

    const onSearchSubmit = (event) => {
        event.preventDefault()
        const query = event.target.value
        console.log(query)
        fetch(`http://localhost:5000/api/planets/search/${query}`)
            .then(result => result.json())
            .then(planet => onPlanetSelect(planet))
    }

    const findPlanet = (event) => {
        setQuery(event.target.value)
        if(event.target.value != "") {
            const regEx = new RegExp(`^${event.target.value.toLowerCase()}`)
            const foundPlanet = planets.find((planet) => {
                return regEx.test(planet.name.toLowerCase())
            })
            if(foundPlanet) {
                onPlanetSelect(foundPlanet)
            }
        } else {
            onPlanetSelect(null)
        }
    }

    return (
        <form  onSubmit={onSearchSubmit}>
            <input type="text" id="query" onChange={findPlanet} placeholder="Search planets..." />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar