import React, { Component } from 'react';
import styles from './App.module.css';
import { Header } from '../../components';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header title="Marifel Barbasa" />
        <p className={styles.intro}>Content pending</p>
      </div>
    );
  }
}

export default App;
