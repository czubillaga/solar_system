import React, { useEffect, useState } from 'react'
import MoonList from '../components/MoonsList'
import MoonsDetail from '../components/MoonsDetail'
import './Containers.css';

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
        <div className="main-container">
            <MoonList moons={moons} onMoonSelect={onMoonSelect}/>
            {selectedMoon ? <MoonsDetail moon={selectedMoon}/>: null}

        </div>
    )
}

export default MoonsContainer;