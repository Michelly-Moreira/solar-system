import React, { Component } from 'react';
import Title from './Title';

class SolarSystem extends Component {
  render() {
    // const { headline } = 'Planetas';
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
      </div>
    );
  }
}

export default SolarSystem;
