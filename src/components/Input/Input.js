import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Input as CustomInput } from 'reactstrap';
import styles from './Input.module.scss';

function Input({className, field, error}){

  return(
    <CustomInput
      {...field}
      autoComplete='off'
      className={cx(styles.input, className, {
        [styles.hasError]: !!error
      })}
      placeholder='Name or Email'
    />
  );
}

Input.propTypes = {
  error: PropTypes.string,
};

export default Input;

