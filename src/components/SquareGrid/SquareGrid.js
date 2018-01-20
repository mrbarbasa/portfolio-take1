import React from 'react';
import PropTypes from 'prop-types';
import styles from './SquareGrid.module.css';

const SquareGrid = ({ children }) => {
  return <div className={styles.grid}>{children}</div>;
};

SquareGrid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SquareGrid;
