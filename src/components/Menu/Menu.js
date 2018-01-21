import React from 'react';
import styles from './Menu.module.css';
import { Prompt } from '../';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <Prompt command="git init" />
    </div>
  );
};

export default Menu;
