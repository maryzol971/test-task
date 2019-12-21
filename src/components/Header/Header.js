import React, {useState} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import styles from './Header.module.scss';

import CustomModal from '../CustomModal/CustomModal';

function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [isModalOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => setModalIsOpen(!isModalOpen);

  return (
    <>
      <header className={styles.header}>
        <Navbar color="dark" dark expand="md">
          <NavbarToggler onClick={toggle} />
          <NavbarText active className={styles.logo}>SomeProduct</NavbarText>
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className={styles.navLink}>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={styles.navLink}>News</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={styles.navLink} onClick={toggleModal}>Popup</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </header>

    <CustomModal isOpen={isModalOpen} toggle={toggleModal} centered/>
  </>
  );
}

export default Header;