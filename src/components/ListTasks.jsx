import {TaskContext} from "../context/TaskContext";
import { useContext, useState } from "react";

export default function ListTasks (props) {
    const context = useContext(TaskContext)
    const [editandoId, setEditandoId] = useState(null)
    const [novoNome, setNovoNome] = useState("")

    function ativarEdicao (tarefa) {
        setEditandoId(tarefa.id)
        setNovoNome(tarefa.nome)
    }

    function salvarEdicao (tarefaParaEdicao) {
        context.editeTask({
            ...tarefaParaEdicao,
            nome: novoNome.trim()
        });

        setEditandoId(null)
        setNovoNome("")
    }

    return (
        <>
        <ul>
            {context.tarefas.map(tarefa => {
                return <li className="lista-tarefas" key={tarefa.id}>
                    {editandoId === tarefa.id ? (
                    <>
                    <input type="text" placeholder="Edite aqui" value={novoNome} onChange={e => setNovoNome(e.target.value)} />
                    <button onClick={() => salvarEdicao(tarefa)}>Salvar</button>
                    <button onClick={() => setEditandoId(null)}>Cancelar</button>
                    </>
                ) : (
                <>
                {tarefa.nome}
                <div className="botoes-editar-e-excluir">
                <button className="button-delete" onClick={() => context.removeTask(tarefa)}> x </button>
                <button className="editar-tarefa" onClick={() => ativarEdicao(tarefa)}>🖊</button>
                </div>
                </>
                )}
                </li>      
            })}
        </ul>
        </>
    )
}