import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import { Prompt } from '../';

const Header = ({ title }) => {
  return (
    <header className={styles.header}>
      <Prompt command="whoami" />
      <h1 className={styles.title}>{title}</h1>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: '',
};

export default Header;
