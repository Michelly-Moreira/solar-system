import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';
import Missions from './components/Missions';
import MissionCard from './components/MissionCard';
import PlanetCard from './components/PlanetCard'; // retirar
import Planets from './data/planets';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Title />
        <SolarSystem allPlanets={ Planets } />
        <Missions />
        <MissionCard />
        <PlanetCard />
      </>
    );
  }
}
// linha 19 retirar planetName={ Planets.name } planetImage={ Planets.image }

export default App;
