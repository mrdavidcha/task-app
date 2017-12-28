import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import '../../css/header.css';

class Header extends Component {
  render() {
    return (
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <h1 className="title">Welcome to React</h1>
        </header>
    );
  }
}

export default Header;
