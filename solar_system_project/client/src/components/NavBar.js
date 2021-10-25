import React from "react";
import './NavBar.css';
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <div>
        <ul className="nav-bar">
            <li>
                <button><span><Link to="/">Home</Link></span></button>
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