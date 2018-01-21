import React from 'react';
import PropTypes from 'prop-types';
import styles from './Square.module.css';

const Square = ({ text, onHoverText }) => {
  return <div className={styles.square}>{text}</div>;
};

Square.propTypes = {
  text: PropTypes.string,
  onHoverText: PropTypes.string,
};

export default Square;
