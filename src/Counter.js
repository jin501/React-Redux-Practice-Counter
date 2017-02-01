import React, { Component } from 'react';
import { connect } from 'react-redux'
import Button from './Button'

class Counter extends Component {
  render(){
    console.log("Counter Component")
    const { counters, index, increment, decrement } = this.props;
    return(
      <div className="Counter">
        <h1>{counters[index]}</h1>
        <Button text=" + " onClick={increment} index={index} />
        <Button text=" - " onClick={decrement} index={index} />
      </div>
    );
  }

}



//take the state from the redux state,
//take whatever pieces of it we want
//and map it to a prop for this component
const mapStateToProps = (state) => {
  // debugger
  console.log("mapStateToProps")
  console.log(state)

  return {counters: state.counters}
}
// the key 'counterr' is the
//  this.props.counterr in line 8
//the counter in state.counter line 19
//  is from the key in defaultState

const incrementCounter = (i) => ({type:"INCREMENT", index: i})

const mapDispatchToProps = (dispatch) => {
  console.log("mapDispatchToProps")

  return {
    increment: (i) => dispatch(incrementCounter(i)),
    decrement: (i) => dispatch({type: "DECREMENT", index: i})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
