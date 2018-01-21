import React, { Component } from 'react';
import styles from './App.module.css';
import {
  Header,
  Heading,
  Menu,
  Section,
  Square,
  SquareGrid,
} from '../../components';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header title="Marifel Barbasa" />
        <Menu />
        <Section>
          <Heading title="What's New?" />
          <SquareGrid>
            <Square text="Reading Mastering Bitcoin" onHoverText="Hello" />
            <Square text="Hacking on this site" onHoverText="Hello" />
            <Square text="Buying cryptocurrencies" onHoverText="Hello" />
            <Square
              text="Researching machine learning programs"
              onHoverText="Hello"
            />
          </SquareGrid>
        </Section>
        <Section backgroundColor="#2B303B">
          <Heading title="About" color="#C0C5CE" />
          <p className={styles.text}>
            I'm a full-stack web developer passionate about web technologies,
            open-source software, and learning, striving to effect positive
            changes in tech and its community.
          </p>
        </Section>
        <Section backgroundColor="#F0F0F0">
          <Heading title="Projects" />
          <SquareGrid>
            <Square text="js-zombies" onHoverText="Hello" />
            <Square text="Werewolf" onHoverText="Hello" />
            <Square text="W.A.T.E.R.S." onHoverText="Hello" />
            <Square text="Lazy Chef Bot" onHoverText="Hello" />
          </SquareGrid>
        </Section>
        <Section backgroundColor="#2B303B">
          <Heading title="Skills" color="#C0C5CE" />
          <ul className={styles.text}>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>PostgreSQL</li>
          </ul>
        </Section>
        <Section backgroundColor="#F0F0F0">
          <Heading title="Experience" />
        </Section>
        <Section backgroundColor="#2B303B">
          <Heading title="Education" color="#C0C5CE" />
        </Section>
        <Section backgroundColor="#F0F0F0">
          <Heading title="Links" />
        </Section>
      </div>
    );
  }
}

export default App;
