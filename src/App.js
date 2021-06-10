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
      nome_cartola: [
        response1.data.time.nome_cartola,
        response2.data.time.nome_cartola,
        response3.data.time.nome_cartola,
        response4.data.time.nome_cartola
      ]
    })
    this.setState({
      nome_real: [
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
      marginLeft: "43%",
    }

    const { pontos } = this.state;
    const { nome_cartola } = this.state;
    const { nome_real } = this.state;

    return (

      <div style={div}>
        <h1>Ligas CartolaFC Overrox</h1>

        <h2>Liga Easy #1</h2>

        <li><strong>{nome_cartola[0]}:</strong>   {nome_real[0]} --{pontos[0]}</li>
        <li><strong>{nome_cartola[1]}:</strong>   {pontos[1]}</li>
        <li><strong>{nome_cartola[2]}:</strong>   {pontos[2]}</li>
        <li><strong>{nome_cartola[3]}:</strong>   {pontos[3]}</li>

        <table style={table} striped bordered hover variant="dark">
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </table>

      </div >

    );
  };
};

export default App;
