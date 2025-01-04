import React, { Component } from "react";
import "./App.css";
import Comentario from "./components/Comentario";

class App extends Component {
  state = {
    comentarios: [
      {
        nome: "Brook",
        email: "brook@gmail.com",
        date: new Date(2025, 1, 1),
        mensagem: "Yo ho-ho~",
      },
      {
        nome: "Chopper",
        email: "chopper@gmail.com",
        date: new Date(2025, 1, 1),
        mensagem: "Eu sou um médico",
      },
    ],
    novoComentario: {
      nome: "",
      email: "",
      mensagem: "",
    },
    editandoComentario: null, // ID do comentário em edição
    mensagemEditada: "", // Mensagem temporária para edição
  };

  adicionarComentario = (evento) => {
    evento.preventDefault();
    const novoComentario = { ...this.state.novoComentario, date: new Date() };
    this.setState({
      comentarios: [...this.state.comentarios, novoComentario],
      novoComentario: { nome: "", email: "", mensagem: "" },
    });
  };

  removerComentario = (comentario) => {
    const lista = this.state.comentarios.filter((c) => c !== comentario);
    this.setState({ comentarios: lista });
  };

  editarComentario = (id) => {
    const comentarioAtual = this.state.comentarios[id];
    this.setState({
      editandoComentario: id,
      mensagemEditada: comentarioAtual.mensagem,
    });
  };

  salvarEdicao = (evento, id) => {
    evento.preventDefault();
    const form = evento.target;
    const nome = form.nome.value;
    const mensagem = form.mensagem.value;
  
    const comentariosAtualizados = this.state.comentarios.map((comentario, indice) =>
      indice === id ? { ...comentario, nome, mensagem } : comentario
    );
  
    this.setState({
      comentarios: comentariosAtualizados,
      editandoComentario: null,
    });
  };
  


  cancelarEdicao = () => {
    this.setState({
      editandoComentario: null,
      mensagemEditada: "",
    });
  };

  digitacao = (evento) => {
    const { name, value } = evento.target;
    this.setState({ novoComentario: { ...this.state.novoComentario, [name]: value } });
  };

  render() {
    return (
      <div className="App">
        <h1>Luffy, Rei dos piratas</h1>
        {this.state.comentarios.map((comentario, indice) =>
          this.state.editandoComentario === indice ? (
            // Formulário de edição
            <form
              key={indice}
              onSubmit={(e) => this.salvarEdicao(e, indice)}
              className="Editar-Comentario"
            >
              <input
                type="text"
                value={this.state.mensagemEditada}
                onChange={(e) => this.setState({ mensagemEditada: e.target.value })}
                required
              />
              <button type="submit">Salvar</button>
              <button type="button" onClick={this.cancelarEdicao}>
                Cancelar
              </button>
            </form>
          ) : (
            // Exibição normal do comentário
            <Comentario
            key={indice}
            id={indice}
            nome={comentario.nome}
            email={comentario.email}
            date={comentario.date}
            editandoComentario={this.state.editandoComentario}
            onEdit={() => this.editarComentario(indice)} // Corrigido
            onRemove={() => this.removerComentario(comentario)} // Corrigido
          >
            {comentario.mensagem}
          </Comentario>
          
          )
        )}
        <form
          method="post"
          onSubmit={this.adicionarComentario}
          className="Novo-Comentario"
        >
          <h2>Adicionar Comentário</h2>
          <div>
            <input
              type="text"
              name="nome"
              value={this.state.novoComentario.nome}
              onChange={this.digitacao}
              required
              placeholder="Digite seu nome"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={this.state.novoComentario.email}
              onChange={this.digitacao}
              required
              placeholder="Digite seu email"
            />
          </div>
          <div>
            <textarea
              name="mensagem"
              value={this.state.novoComentario.mensagem}
              onChange={this.digitacao}
              required
              rows="4"
            ></textarea>
          </div>
          <button type="submit">Adicionar Comentário</button>
        </form>
      </div>
    );
  }
}

export default App;
