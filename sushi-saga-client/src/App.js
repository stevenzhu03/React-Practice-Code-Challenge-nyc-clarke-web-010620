import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state= {
    sushis: [],
    eatenSushis:[],
    indexStart:0,
    indexEnd:4,
    startMoney: 200
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

  eatSushi = (id) => {
    let sushiIndex = id - 1
    console.log(sushiIndex)
    this.setState(prevState => ({
      eatenSushis: prevState.eatenSushis.concat(this.state.sushis[sushiIndex]),
      sushis: prevState.sushis.splice(sushiIndex, 1)
    }))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} start={this.state.indexStart} end={this.state.indexEnd} moreButtonHandler={this.moreButtonHandler} eatSushi={this.eatSushi}/>
        <Table startMoney={this.state.startMoney} eatenSushi={this.state.eatenSushis}/>
      </div>
    );
  }
}

export default App;