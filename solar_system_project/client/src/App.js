import './App.css';
import Home from './components/Home';
import PlanetsContainer from './containers/PlanetsContainer';
import MoonsContainer from './containers/MoonsContainer';
import AsteroidsContainer from './containers/AsteroidsContainer';
import NavBar from './components/NavBar';
import ErrorPage from './components/ErrorPage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  return (
    <div className="App">
    <Router>
      <>
      <NavBar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/planets" component={PlanetsContainer} />
        <Route path="/moons" component={MoonsContainer} />
        <Route path="/asteroids" component={AsteroidsContainer}/>
        <Route component={ErrorPage} />
        </Switch>
      </>
    </Router>
    </div>
  );
}

export default App;
