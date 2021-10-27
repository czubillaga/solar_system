import React from "react";
import PlanetsBackgroundDetail from "./PlanetsBackgroundDetail";
import './Home.css'

const Home = ({onClickedPlanet}) => (

  <div className="home">
    <PlanetsBackgroundDetail onClickedPlanet={onClickedPlanet}/>
  </div>

);

export default Home;
