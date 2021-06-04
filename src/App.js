import React, { Component } from 'react';
import api from './api';
import cors from 'cors';

class App extends Component {

  state = {
    pontos: [],
  }

  async componentDidMount() {


    const response = await api.get('28645094/1');

    this.setState({ pontos: response.data });
  }

  render() {

    const { pontos } = this.state;

    return (

      <div>
        <h1>Listar os valores</h1>


        <div id="result">Pontos: </div>

        <li>{pontos.pontos}</li>
        <li>{console.log(pontos)}</li>

      </div>
    );

  };

};

export default App;
