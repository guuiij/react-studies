import React from "react";
import './Comentario.css'


//JSX   -- sintaxe que usa dentro do HTML, precisa importar
const Comentario = props => (
    <div className="Comentario">
        <h2>{props.nome}</h2>
        <p>{props.email}</p>
        <p>{props.children}</p>
        <p>{props.date.toString()}</p>
    </div>

)


export default Comentario; // pode ser usado em outros lugares