import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
      </div>
    );
  }
}

Missions.propTypes = {
  headline: PropTypes.string,
}.isRequired;

// renderizando o componente Title dentro do componente Missions, recebendo a prop headline e dando o valor "Missões" á prop.

export default Missions;
