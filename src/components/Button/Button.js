import React from 'react';
import { Button as CustomButton } from 'reactstrap';
import cx from 'classnames';
import styles from './Button.module.scss'

function Button({className, children,  type, ...props}) {


  return(
    <CustomButton
      type={type || 'button'}
      className={cx(styles.button, className)}
      {...props.field}
    >
      {children}
    </CustomButton>
  );
}

export default Button;