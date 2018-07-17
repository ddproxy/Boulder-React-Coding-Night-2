import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './index.css';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <Link to="/">Home</Link>
        <Link to="/elections">Elections</Link>
        <Link to ="/candidates">Candidates</Link>
      </div>
    );
  }
}

export default Nav;
