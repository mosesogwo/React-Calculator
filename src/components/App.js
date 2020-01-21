import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends Component {
  state = {
    result: "0"
  }

  render() {
    return (
      <div className="App">
        <Display result={ this.state.result }/>
        <ButtonPanel />
      </div>
    )
  }
}

export default App;
