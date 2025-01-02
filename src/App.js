import React, { Component } from 'react';
import './App.css';
import Comentario from './components/Comentario';

class App extends Component {

  //aqui é o estado da aplicação
  state = {     // Forma atual de fazer é com Hook, utilizando esse apra aprendizado
    comentarios: [
      {
        nome: 'Brook',
        email: 'brook@gmail.com',
        date: new Date(2025, 1, 1),
        mensagem: 'Yo ho-ho~',
      },
      {
        nome: 'Chopper',
        email: 'chopper@gmail.com',
        date: new Date(2025, 1, 1),
        mensagem: 'Eu sou um médico',
      }
    ]
  }

  render() {

    return (
      <div className="App">
        <h1>Luffy, Rei dos piratas</h1>

        {this.state.comentarios.map((comentario, indice) => (
          <Comentario
            key={indice}
            nome={comentario.nome}
            email={comentario.email}
            date={comentario.date}>
            {comentario.mensagem}
          </Comentario>

        ))}


        {/*<Comentario nome="Nami" email="nami@gmail.com" date={new Date(2018, 9, 18)}>
          Vou ficar rica !
        </Comentario >*/}
      </div>
    );
  }

}

export default App;
