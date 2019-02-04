import React, { Component } from 'react';
import logo from './logo.svg';
import Title from "./components/Title";
import './App.css';
import Board from "./components/Board";
import DeparturesTable from "./components/Tables/DeparturesTable";
import ArrivalsTable from "./components/Tables/ArrivalsTable";
import DetaineesTable from "./components/Tables/DetaineesTable";
class App extends Component {
  state = {
    currentDirection:"Вылет"
  }


  changeDirectionToArrivals() {
    this.setState({
      currentDirection:"Прилет"
    })
  }

  changeDirectionToDepartures() {
    this.setState({
      currentDirection:"Вылет"
    })
  }

  changeDirectionToDetainees() {
    this.setState({
      currentDirection:"Задержанные"
    })
  }

  filterChanged(event) {
    this.setState({
      ...this.state,
      filter: event.target.value
    })
  }

  render() {
    const {currentDirection, filter} = this.state;
    return (
      <div className="App">
        
        <Title />

        <Board direction={currentDirection} />

        <button onClick={this.changeDirectionToDepartures.bind(this)} > 
          Вылет </button>

        <button onClick={this.changeDirectionToArrivals.bind(this)}>
          Прилет </button>

          <button onClick={this.changeDirectionToDetainees.bind(this)}>
          Задержанные </button>
          <div><input placeholder="Поиск по номеру рейса" onChange={this.filterChanged.bind(this)}></input>
          </div>
          
         
          {currentDirection === "Вылет" && <DeparturesTable filter={filter}/>}
          {currentDirection === "Прилет" && <ArrivalsTable filter={filter}/>}
          {currentDirection === "Задержанные" && <DetaineesTable filter={filter}/>}
      </div>
         
      
           
    );
  }
}


export default App;
