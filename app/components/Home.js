// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import routes from '../constants/routes';
import styles from './Home.css';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state={}
  }

  testCFunction() {

  }

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>Home</h2>
        <Link to={routes.COUNTER}>to Counter</Link>
        <button onClick={() => this.testCFunction()}>test c function</button>
      </div>
    );
  }
}

export default Home;
