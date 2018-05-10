import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <h1>
        HOME
        <Link to="/Market/1"> MARKET </Link>
        <Link to="/Manager"> MANAGER </Link>
        <Link to="/Alert"> Alert </Link>
        <Link to="/TabsExam"> Tabs </Link>
        <Link to="/MygonDetail"> MygonDetail </Link>
      </h1>
    )
  }
}

export default Home;
