import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <li>
        <div data-testid="mission-card">
          <p data-testid="mission-name">
            { name }
          </p>
          <p data-testid="mission-year">
            { year }
          </p>
          <p data-testid="mission-country">
            { country }
          </p>
          <p data-testid="mission-destination">
            { destination }
          </p>
        </div>
      </li>
    );
  }
}

MissionCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    year: PropTypes.number,
    country: PropTypes.string,
    destination: PropTypes.string,
  }),
}.isRequired;

// criando componentes com as props name, year, country e destination
export default MissionCard;
