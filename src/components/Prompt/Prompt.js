import React from 'react';
import PropTypes from 'prop-types';
import styles from './Prompt.module.css';

const Prompt = ({ command }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.prompt}>▶</span>
      {command && <span className={styles.command}>{command}</span>}
    </div>
  );
};

Prompt.propTypes = {
  command: PropTypes.string,
};

export default Prompt;
