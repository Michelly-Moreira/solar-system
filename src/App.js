import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <p>Sistema Solar</p>
        <SolarSystem />
      </>
    );
  }
}

export default App;
