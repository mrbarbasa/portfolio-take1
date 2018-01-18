import React, { Component } from 'react';
import styles from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Marifel Barbasa</h1>
        </header>
        <p className={styles.intro}>Content pending</p>
      </div>
    );
  }
}

export default App;
