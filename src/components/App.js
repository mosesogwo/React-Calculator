import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      // result: '0',
      total: null,
      next: null,
      operation: null,
   };
  }

  handleClick = (buttonName) => {
    const data = { 
      total: this.state.total,
      next: this.state.next,
      operation: this.state.operation
    }
    const newData = calculate(data, buttonName);
    this.setState({
      total: newData.total,
      next: newData.newNext,
      operation: newData.operation
    })
  }


  render() {
    const result = this.state.next ? this.state.next : this.state.total;
    if (result){
    return (
      <div className="App">
        <Display result = {result}/>
        <ButtonPanel handleClick = { this.handleClick }/>
      </div>
    );} else {
      return (
        <div className="App">
          <Display />
          <ButtonPanel handleClick = { this.handleClick }/>
        </div>
      )
    }
  }
}

export default App;
