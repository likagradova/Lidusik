import React, { Component } from 'react';
import logo from './logo.svg';
import Title from "./components/Title"
import './App.css';
import Board from "./components/Board"
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


        <div class="table-flex__head">
          <div class="table-flex__row">
          </div>
        </div>
        <div>

          <span>Время</span>

          <span>
            № рейса</span>

          <span>
            Авиакомпания</span>

          <span>
            Направление</span>

          <span>
            Статус</span>
        </div>




      </div>
    );
  }
}

export default App;
