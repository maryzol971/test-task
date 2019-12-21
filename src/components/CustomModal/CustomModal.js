import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'reactstrap';
import styles from './CustomModal.module.scss';

import InviteForm from '../InviteForm/InviteForm';
import InvitedPeople from "../InvitedPeople/InvitedPeople";
import Select from '../Select/Select';
import Button from '../Button/Button';

import {mockRules} from "../InviteForm/InviteForm";

const mockPersons = [{
  username: 'emma@watson.com',
  rule: 'Owner',
},{
  username: 'hello@milangladis.com',
  rule: 'Owner',
},{
  username: 'http://lor.em/l296gdk6',
  rule: 'Public Link',
}];

function CustomModal(props) {

  const [invitedPeople, setInvitedPeople] = useState(mockPersons);

  const handleSubmitForm = (values) => {
    setInvitedPeople([...invitedPeople, {username: values.username, rule: values.rules.label}]);
  };

  const handleRemovePerson = (person) => {
    setInvitedPeople(invitedPeople.filter(per => per.username !== person.username));
  };

  return (
    <Modal {...props} className={styles.modal}>
      <div className={styles.modalHeader}>
        <p className={styles.modalHeaderText}>Invite people to project</p>
        <span className={styles.closeModalButton} onClick={props.toggle}/>
      </div>
      <div className={styles.modalBody}>
        <InviteForm onSubmit={handleSubmitForm}/>
        <InvitedPeople persons={invitedPeople} handleRemovePerson={handleRemovePerson}/>
      </div>
      <div className={styles.modalFooter}>
        <p className={styles.modalFooterText}>Or share this Project with Public link</p>
        <div className={styles.modalFooterControls}>
          <Select options={mockRules} field={{value: mockRules[0]}} className={styles.footerSelect}/>
          <Button className={styles.footerButton}>Copy link</Button>
        </div>
      </div>
    </Modal>
  );
}

CustomModal.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default CustomModal;