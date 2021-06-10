import React, { Component } from 'react';
import api from './api';

class App extends Component {

  state = {
    pontos: [],
    nome_cartola: [],
    nome_real: []
  }

  async componentDidMount() {

    const response1 = await api.get('18200/2');
    const response2 = await api.get('2776836/2');
    const response3 = await api.get('24342752/2');

    const response4 = await api.get('3128869/2');
    const response5 = await api.get('19217209/2');
    const response6 = await api.get('44651/2');

    const response7 = await api.get('19308353/2');
    const response8 = await api.get('25588138/2');
    const response9 = await api.get('13973204/2');


    this.setState({
      pontos: [
        response1.data.pontos,
        response2.data.pontos,
        response3.data.pontos,
        response4.data.pontos,
        response5.data.pontos,
        response6.data.pontos,
        response7.data.pontos,
        response8.data.pontos,
        response9.data.pontos,
      ]
    })

    this.setState({
      nome_real: [
        response1.data.time.nome_cartola,
        response2.data.time.nome_cartola,
        response3.data.time.nome_cartola,
        response4.data.time.nome_cartola,
        response5.data.time.nome_cartola,
        response6.data.time.nome_cartola,
        response7.data.time.nome_cartola,
        response8.data.time.nome_cartola,
        response9.data.time.nome_cartola
      ]
    })
    this.setState({
      nome_cartola: [
        response1.data.time.nome,
        response2.data.time.nome,
        response3.data.time.nome,
        response4.data.time.nome,
        response5.data.time.nome,
        response6.data.time.nome,
        response7.data.time.nome,
        response8.data.time.nome,
        response9.data.time.nome,
      ]
    })
  }

  render() {

    const div = {
      //color: 'blue',
      textAlign: "center",
      //display: "flex",
      //flexdirection: row
    };
    const table = {
      textAlign: "center",
      color: "blue",
      marginLeft: "40%",
      bordered: "true",
      justifyContent: "center",
      alignItems: "center",
      //border: 'solid 1px blue'
    };

    const { pontos } = this.state;
    const { nome_cartola } = this.state;
    const { nome_real } = this.state;

    const maior = Math.max.apply(null, pontos);

    return (

      <div style={div}>
        <h1 textAlign="center">Ligas CartolaFC Overrox </h1>

        <h2>Liga Easy #1</h2>

        <h1> Grupo 1</h1>

        <div>
          <table style={table}>
            <tr bordered="true">
              <th>Nome</th>
              <th>Time do CartolaFC</th>
              <th>Pontos da Rodada</th>
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

          <table style={table}>
            <tr>
              <th>Nome</th>
              <th>Time do CartolaFC</th>
              <th>Pontos da Rodada</th>
            </tr>
            <tr>
              <td>{nome_real[3]}</td>
              <td>{nome_cartola[3]}</td>
              <td>{pontos[3]}</td>
            </tr>
            <tr>
              <td>{nome_real[4]}</td>
              <td>{nome_cartola[4]}</td>
              <td>{pontos[4]}</td>
            </tr>
            <tr>
              <td>{nome_real[5]}</td>
              <td>{nome_cartola[5]}</td>
              <td>{pontos[5]}</td>
            </tr>
          </table>

          <h1> Grupo 3</h1>

          <table style={table}>
            <tr>
              <th>Nome</th>
              <th>Time do CartolaFC</th>
              <th>Pontos da Rodada</th>
            </tr>
            <tr>
              <td>{nome_real[6]}</td>
              <td>{nome_cartola[6]}</td>
              <td>{pontos[6]}</td>
            </tr>
            <tr>
              <td>{nome_real[7]}</td>
              <td>{nome_cartola[7]}</td>
              <td>{pontos[7]}</td>
            </tr>
            <tr>
              <td>{nome_real[8]}</td>
              <td>{nome_cartola[8]}</td>
              <td>{pontos[8]}</td>
            </tr>
          </table>

          <h1> Final</h1>

          <table style={table}>
            <tr>
              <th>Nome</th>
              <th>Time do CartolaFC</th>
              <th>Pontos da Rodada</th>
            </tr>
            <tr>
              <td>x</td>
              <td>x</td>
              <td>x</td>
            </tr>
            <tr>
              <td>x</td>
              <td>x</td>
              <td>x</td>
            </tr>
            <tr>
              <td>x</td>
              <td>x</td>
              <td>x</td>
            </tr>
          </table>
        </div>
      </div >

    );
  };
};

export default App;
