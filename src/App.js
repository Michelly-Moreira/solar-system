import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';
import Missions from './components/Missions';
import MissionCard from './components/MissionCard';
import PlanetCard from './components/PlanetCard'; // retirar
import Planets from './data/planets';
import allMissions from './data/missions';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Title />
        <SolarSystem allPlanets={ Planets } />
        <Missions Missions={ allMissions } />
        <MissionCard />
        <PlanetCard />
      </>
    );
  }
}

export default App;
