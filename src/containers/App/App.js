import React, { Component } from 'react';
import styles from './App.module.css';
import { Header } from '../../components';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header title="Marifel Barbasa" />
        <div className={styles.content}>
          <div>something</div>
          <div>really</div>
          <div>cool</div>
          <div>should</div>
          <div>go</div>
          <div>here</div>
        </div>
      </div>
    );
  }
}

export default App;
