import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state= {
    sushis: [],
    indexStart:0,
    indexEnd:4
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => this.setState({
      sushis: sushis
    }))
  }

  moreButtonHandler = () => {
    this.setState(prevState => ({
      indexStart: prevState.indexStart + 4,
      indexEnd: prevState.indexEnd + 4
    }))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} start={this.state.indexStart} end={this.state.indexEnd} moreButtonHandler={this.moreButtonHandler}/>
        <Table />
      </div>
    );
  }
}

export default App;