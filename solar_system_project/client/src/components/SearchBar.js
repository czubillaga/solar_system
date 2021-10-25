import React from "react";

const SearchBar = ({onPlanetSelect}) => {

    const onSearchSubmit = (event) => {
        event.preventDefault()
        const query = event.target.query.value
        console.log(query)
        fetch(`http://localhost:5000/api/planets/search/${query}`)
            .then(result => result.json())
            .then(planet => onPlanetSelect(planet))
    }

    return (
        <form  onSubmit={onSearchSubmit}>
            <input type="text" id="query" placeholder="Search planets..." />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar