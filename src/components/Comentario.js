import React from "react";
import { formatRelative } from "date-fns";
import { ptBR} from 'date-fns/locale'


import './Comentario.css'
import imagemUsuario from './user.png';

//JSX   -- sintaxe que usa dentro do HTML, precisa importar
const Comentario = props => {


    return <div className="Comentario">
        <img className="avatar" src={imagemUsuario} alt={props.nome} />
        <div class="conteudo">
            {props.editandoComentario === props.id ? (
                // Exibir formulário para edição
                <form onSubmit={(e) => props.salvarEdicao(e, props.id)}>
                    <input
                        type="text"
                        name="nome"
                        defaultValue={props.nome} // Valor inicial
                        required
                    />
                    <textarea
                        name="mensagem"
                        defaultValue={props.children} // Conteúdo da mensagem
                        required
                        rows="4"
                    ></textarea>
                    <button type="submit">Salvar</button>
                    <button type="button" onClick={() => props.onEdit(null)}>
                        Cancelar
                    </button>
                </form>
            ) : ( //Exibir conteúdo normal
                <>
                    <h2 className="nome">{props.nome}</h2>
                    <p className="email">{props.email}</p>
                    <p className="mensagem">{props.children}</p>
                    <p className="date">{formatRelative(props.date, new Date(), {locale: ptBR})}</p>
                    <button onClick={props.onEdit}>Editar</button> {/* Botão de edição */}
                    <button onClick={props.onRemove}>&times;</button>
                </>
            )}
        </div>
    </div>

}


export default Comentario; // pode ser usado em outros lugares