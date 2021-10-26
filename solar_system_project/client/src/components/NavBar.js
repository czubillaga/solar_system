import React from "react";
import './NavBar.css';
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <div>
        <ul className="nav-bar">
            <li>
                <button id="btn"><span><Link to="/"><img id="img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Circle-icons-rocket.svg/1200px-Circle-icons-rocket.svg.png" height="75"/></Link></span></button>
            </li>
            <li>
                <button><span><Link to="/planets">Planets</Link></span></button>
            </li>
            <li>
                <button><span><Link to="/moons">Moons</Link></span></button>
            </li>
            <li>
                <button><span><Link to="/asteroids">Asteroids</Link></span></button>
            </li>
        </ul>
        </div>
    )
}

export default NavBar;