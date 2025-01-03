import React from "react";
import './Comentario.css'
import imagemUsuario from './user.png';

//JSX   -- sintaxe que usa dentro do HTML, precisa importar
const Comentario = props => {


    return <div className="Comentario">
        <img className="avatar" src={imagemUsuario} alt={props.nome} />
        <div class="conteudo">  {/* Conteudo do comentário */}
            <h2 className="nome">{props.nome}</h2>
            <p className="email">{props.email}</p>
            <p className="mensagem">{props.children}</p>
            <p className="date">{props.date.toString()}</p>
            <button onClick={props.onRemove}>&times;</button>
        </div>
    </div>

}


export default Comentario; // pode ser usado em outros lugares