import React, { Component } from 'react';
import api from './api';

class App extends Component {

  state = {
    pontos: [],
    nome_cartola: [],
    nome_real: []
  }

  async componentDidMount() {

    const response1 = await api.get('28645094/1');
    const response2 = await api.get('28570268/1');
    const response3 = await api.get('28328126/1');
    const response4 = await api.get('16872399/1');

    this.setState({
      pontos: [
        response1.data.pontos,
        response2.data.pontos,
        response3.data.pontos,
        response4.data.pontos,
      ]
    })

    this.setState({
      nome_real: [
        response1.data.time.nome_cartola,
        response2.data.time.nome_cartola,
        response3.data.time.nome_cartola,
        response4.data.time.nome_cartola
      ]
    })
    this.setState({
      nome_cartola: [
        response1.data.time.nome,
        response2.data.time.nome,
        response3.data.time.nome,
        response4.data.time.nome
      ]
    })
  }

  render() {

    const div = {
      //color: 'blue',
      textAlign: "center",
    };
    const table = {
      textAlign: "center",
      color: 'blue',
      marginLeft: "40%",
    }

    const { pontos } = this.state;
    const { nome_cartola } = this.state;
    const { nome_real } = this.state;

    return (

      <div style={div}>
        <h1>Ligas CartolaFC Overrox</h1>

        <h2>Liga Easy #1</h2>
        <h1> Grupo 1</h1>
        <table style={table} striped bordered hover variant="dark">
          <tr>
            <th>Nome Real</th>
            <th>Time do CartolaFC</th>
            <th>Pontos</th>
          </tr>
          <tr>
            <td>{nome_real[0]}</td>
            <td>{nome_cartola[0]}</td>
            <td>{pontos[0]}</td>
          </tr>
          <tr>
            <td>{nome_real[1]}</td>
            <td>{nome_cartola[1]}</td>
            <td>{pontos[1]}</td>
          </tr>
          <tr>
            <td>{nome_real[2]}</td>
            <td>{nome_cartola[2]}</td>
            <td>{pontos[2]}</td>
          </tr>
        </table>
        <h1> Grupo 2</h1>
        <table style={table} striped bordered hover variant="dark">
          <tr>
            <th>Nome Real</th>
            <th>Time do CartolaFC</th>
            <th>Pontos</th>
          </tr>
          <tr>
            <td>{nome_real[0]}</td>
            <td>{nome_cartola[0]}</td>
            <td>{pontos[0]}</td>
          </tr>
          <tr>
            <td>{nome_real[1]}</td>
            <td>{nome_cartola[1]}</td>
            <td>{pontos[1]}</td>
          </tr>
          <tr>
            <td>{nome_real[2]}</td>
            <td>{nome_cartola[2]}</td>
            <td>{pontos[2]}</td>
          </tr>
        </table>

      </div >

    );
  };
};

export default App;
