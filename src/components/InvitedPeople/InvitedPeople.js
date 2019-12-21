import React from 'react';
import PropTypes from 'prop-types';
import styles from './InvitedPeople.module.scss';

import Person from '../Person/Person';

function InvitedPeople({persons, handleRemovePerson}){


  return (
    <div className={styles.wrapper}>
      {
        persons.map((person, index) => <Person
          key={`${person.username}-${index}`}
          username={person.username}
          rule={person.rule}
          handleRemovePerson={handleRemovePerson}
        />)}
      {persons.length === 0 && <div className={styles.emptyPersons}>Try to invite first person</div>}
    </div>
  );
}

InvitedPeople.propTypes = {
  persons: PropTypes.array.isRequired,
  handleRemovePerson: PropTypes.func.isRequired,
};

export default InvitedPeople;