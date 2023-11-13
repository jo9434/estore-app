// Start of App.js
import React, { Component } from 'react';
import Navbar from './components/Navbar/navbar';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="sub-main">
        <Navbar />
      </div>
    );
  }
}
// End of App.js