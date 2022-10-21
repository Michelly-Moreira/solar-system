import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';
import Missions from './components/Missions';
import MissionCard from './components/MissionCard';
import PlanetCard from './components/PlanetCard';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Title />
        <SolarSystem />
        <Missions />
        <MissionCard />
        <PlanetCard />
      </>
    );
  }
}

export default App;
