import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter'

class App extends Component {
  render() {
    console.log("APP Component")
    const counters = this.props.counters.map( (counter, i) => {
      return <Counter key={i} index={i} />
    })
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Foreign Methods</h2>
        </div>
        { counters }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {counters: state.counters}
}

export default connect(mapStateToProps)(App);
