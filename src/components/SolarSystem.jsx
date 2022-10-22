import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <ul>
          {Planets.map((eachPlanet) => (
            <PlanetCard
              key={ eachPlanet.name }
              planetName={ eachPlanet.name }
              planetImage={ eachPlanet.image }
            />
          ))}
        </ul>
      </div>
    );
  }
}

SolarSystem.propTypes = {
  allPlanets: PropTypes.array,
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
}.isRequired;

export default SolarSystem;
