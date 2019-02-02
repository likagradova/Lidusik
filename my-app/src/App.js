import React, { Component } from 'react';
import logo from './logo.svg';
import Title from "./components/Title"
import './App.css';
import Board from "./components/Board"
import OutGoingsTable from "./components/Tables/OutGoingsTable"
import ArrivalsTable from "./components/Tables/ArrivalsTable";
import DetaineesTable from "./components/Tables/DetaineesTable"
class App extends Component {
  state = {
    currentDirection:"Вылет"
  }


  changeDirectionToArrivals() {
    this.setState({
      currentDirection:"Прилет"
    })
  }

  changeDirectionToOutgoings() {
    this.setState({
      currentDirection:"Вылет"
    })
  }

  changeDirectionToDetainees() {
    this.setState({
      currentDirection:"Задержанные"
    })
  }


  render() {
    const {currentDirection} = this.state;
    return (
      <div className="App">
        
        <Title />
        <Board direction={currentDirection} />
        <button onClick={this.changeDirectionToOutgoings.bind(this)}>
          Вылет </button>

        <button onClick={this.changeDirectionToArrivals.bind(this)}>
          Прилет </button>

          <button onClick={this.changeDirectionToDetainees.bind(this)}>
          Задержанные </button>

          {currentDirection === "Вылет" && <OutGoingsTable/>}
          {currentDirection === "Прилет" && <ArrivalsTable/>}
          {currentDirection === "Задержанные" && <DetaineesTable/>}
      </div>
    );
  }
}

export default App;
