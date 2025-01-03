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
    ],
    novoComentario: {
      nome: '',
      email: '',
      mensagem: ''
    }
  }
  adicionarComentario = evento => {
    evento.preventDefault();
    const novoComentario = { ...this.state.novoComentario, date: new Date() }
    this.setState({
      comentarios: [...this.state.comentarios, novoComentario],
      novoComentario: { nome: '', email: '', mensagem: '' }
    })

  }

  removerComentario = comentario => {
    let lista = this.state.comentarios;
    lista = lista.filter(c => c !== comentario)
    this.setState({ comentarios: lista })
  }


  digitacao = evento => {
    const { name, value } = evento.target;
    this.setState({ novoComentario: { ...this.state.novoComentario, [name]: value } })
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
            date={comentario.date}
            onRemove={this.removerComentario.bind(this, comentario)}>
            {comentario.mensagem}
          </Comentario>

        ))}

        <form method="post" onSubmit={this.adicionarComentario} className="Novo-Comentario">
          <h2>Adicionar Comentário</h2>
          <div>
            <input
              type="text"
              name="nome"
              value={this.state.novoComentario.nome}
              onChange={this.digitacao} // cada vez que digiar uma tecla dispara o evento digitação do nome
              required
              placeholder="Digite seu nome" />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={this.state.novoComentario.email}
              onChange={this.digitacao}
              required
              laceholder="Digite seu email" />
          </div>
          <div>
            <textarea
              name="mensagem"
              value={this.state.novoComentario.mensagem}
              onChange={this.digitacao}
              required
              rows="4"></textarea>
          </div>
          <button type="submit">Adicionar Comentário</button>
        </form>

      </div>
    );
  }

}

export default App;
