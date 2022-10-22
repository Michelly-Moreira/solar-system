import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <li>
        <div data-testid="planet-card">
          <p data-testid="planet-name">
            {planetName}
          </p>
          <img src={ planetImage } alt={ `Planeta ${planetName}` } />
        </div>
      </li>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
}.isRequired;

export default PlanetCard;
