import React, { Component } from 'react';


class Button extends Component {

  render(){
    
    return(
      <div className='Button'>
        <h1>{this.props.props.counter}</h1>
        <button onClick={this.props.props.increment}> + </button>
        <button onClick={this.props.props.decrement}> - </button>
      </div>
    )
  }
}

export default Button;
