import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Section = ({ children, backgroundColor }) => {
  return (
    <section className={styles.section} style={{ backgroundColor }}>
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string,
};

Section.defaultProps = {
  backgroundColor: '#FFFFFF',
};

export default Section;
