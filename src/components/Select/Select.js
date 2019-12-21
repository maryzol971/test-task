import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Select.module.scss';

function Select({className, field, options, form}) {

  function handleChange(e) {
    const value = options.filter(option => option.value === e.target.value)[0];
    form && form.setFieldValue('rules', value);
  }

  return(
    <select
      defaultValue={field.value}
      className={cx(styles.select, className)}
      onChange={handleChange}
      onBlur={() => form && form.setFieldTouched('rules', true)}
    >
      {options.map(option => (
        <option key={`Rule-${option.value}`} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
}

Select.propTypes = {
  options: PropTypes.array.isRequired,
};

export default Select;