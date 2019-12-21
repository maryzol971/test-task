import React from 'react';
import PropTypes from 'prop-types';
import {Formik, Form, Field} from 'formik';
import Input from '../Input/Input';
import Select from '../Select/Select';
import Button from '../Button/Button';
import * as Yup from 'yup';

import styles from './InviteForm.module.scss';

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .email('Invalid Email')
    .required('Email is required'),
});

export const mockRules = [
  {label: 'Can edit', value: 'CanEdit'},
  {label: 'Can`t edit', value: 'CantEdit'},
  {label: 'Owner', value: 'Owner'},
];

function InviteForm({onSubmit}) {

  return(
    <Formik
      initialValues={{
        username: '',
        rules: mockRules[0],
      }}
      validationSchema={validationSchema}
      validateOnBlur
      validateOnChange={false}
      onSubmit={(values, {resetForm}) => {
        onSubmit(values);
        resetForm({});
      }}
    >
      {({errors}) => (
        <div className={styles.mainFormWrapper}>
          <Form className={styles.mainForm}>
            <div className={styles.formWrapper}>
              <Field name='username' component={Input} error={errors.username} />
              <Field name='rules' component={Select} options={mockRules}/>
            </div>
            <Button type='submit'>Invite 1 person</Button>
          </Form>
          {errors.username ? <div className={styles.errorMsg}>{errors.username}</div> : null}
        </div>
      )}
    </Formik>
  );
}

InviteForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default InviteForm;