import React, { Component } from 'react';
import { connect } from 'react-redux'
import Button from './Button'

class Counter extends Component {

  render(){
    return(
      <div className="Counter">
        <Button props={this.props}/>
      </div>
    );
  }

}

const decrementCount = () => {
  return ({type: 'DECREMENT'})
}
//ACTION CREATOR - function that returns an ACTION
//a function that returns an action
// an action which is just an object
const incrementCount = () => {
  return ({type: 'INCREMENT'})
}

//take the state from the redux state,
//take whatever pieces of it we want
//and map it to a prop for this component
const mapStateToProps = (state) => {
  return {counter: state.counter}
}
// the key 'counterr' is the
//  this.props.counterr in line 8
//the counter in state.counter line 19
//  is from the key in defaultState

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({type: "INCREMENT"}),
    decrement: () => dispatch({type: "DECREMENT"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
