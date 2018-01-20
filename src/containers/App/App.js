import React, { Component } from 'react';
import styles from './App.module.css';
import { Header, SquareGrid } from '../../components';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header title="Marifel Barbasa" />
        <SquareGrid>
          <div>something</div>
          <div>really</div>
          <div>super</div>
          <div>duper</div>
          <div>cool</div>
          <div>should</div>
          <div>go</div>
          <div>here</div>
        </SquareGrid>
      </div>
    );
  }
}

export default App;
