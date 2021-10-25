import React from "react";
import './NavBar.css';
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <div>
        <ul className="nav-bar">
            <li>
                <Link to="/">Home</Link> 
            </li>
            <li>
                <Link to="/planets">Planets</Link> 
            </li>
            <li>
                <Link to="/moons">Moons</Link> 
            </li>
            <li>
                <Link to="/asteroids">Asteroids</Link>
            </li>
        </ul>
        </div>
    )
}

export default NavBar;