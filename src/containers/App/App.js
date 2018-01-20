import React, { Component } from 'react';
import styles from './App.module.css';
import { Header, SquareGrid } from '../../components';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header title="Marifel Barbasa" />
        <SquareGrid>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </SquareGrid>
      </div>
    );
  }
}

export default App;
