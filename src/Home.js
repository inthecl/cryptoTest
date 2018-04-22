import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <h1>
        HOME
        <Link to="/Market/1"> MARKET </Link>
      </h1>
    )
  }
}

export default Home;
