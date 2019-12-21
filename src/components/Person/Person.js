import React from 'react';
import styles from './Person.module.scss';

function Person({username, rule, handleRemovePerson}) {

  const handleRemove = () => {
    handleRemovePerson({username, rule});
  };

  return(
    <div className={styles.person}>
      <div className={styles.info}>
        <div className={styles.ava} />
        <div className={styles.userInfo}>
          <p className={styles.name}>User name ({rule})</p>
          <p className={styles.email}>{username}</p>
        </div>
      </div>
      <div className={styles.controls}>
        <p className={styles.hint}>Spent 3h 34mins</p>
        <button className={styles.button} onClick={handleRemove}>Transfer ownership</button>
      </div>
    </div>
  );
}

export default Person;