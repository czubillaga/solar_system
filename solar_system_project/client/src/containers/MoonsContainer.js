import React, { useEffect, useState } from 'react'
import MoonList from '../components/MoonsList'
import MoonsDetail from '../components/MoonsDetail'

const MoonsContainer = () => {

    const [moons, setMoons] = useState([])
    const [selectedMoon, setSelectedMoon] = useState(null)

    const getMoons = () => {
        fetch('http://localhost:5000/api/moons')
            .then(res => res.json())
            .then(data => setMoons(data))
    }

    useEffect(() => {
        getMoons()
    }, [])

    const onMoonSelect = (moon) => {
        setSelectedMoon(moon)
    }

    return(
        <div>
            <h1>This is the MoonsContainer</h1>
            <MoonList moons={moons} onMoonSelect={onMoonSelect}/>
            {selectedMoon ? <MoonsDetail moon={selectedMoon}/>: null}

        </div>
    )
}

export default MoonsContainer