import React from 'react';
import PropTypes from 'prop-types';
import styles from './Heading.module.css';

const Heading = ({ title, color }) => {
  return (
    <h2 className={styles.heading} style={{ color }}>
      {title}
    </h2>
  );
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Heading.defaultProps = {
  color: '#2B303B',
};

export default Heading;
