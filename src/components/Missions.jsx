import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <ul>
          {allMissions.map((eachMission) => (
            <MissionCard
              key={ eachMission.name }
              dataMission={ eachMission }
            />
          ))}
        </ul>
      </div>
    );
  }
}

Missions.propTypes = {
  headline: PropTypes.string,
  Missions: PropTypes.shape({
    name: PropTypes.string,
    year: PropTypes.number,
    country: PropTypes.string,
    destination: PropTypes.string,
  }),
}.isRequired;

// renderizando o componente Title dentro do componente Missions, recebendo a prop headline e dando o valor "Missões" á prop.
// renderizando o componente MissionCard
export default Missions;
