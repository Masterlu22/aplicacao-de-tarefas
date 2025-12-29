import React, { useEffect, useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import NavBar from "../components/NavBar";



export default function AddTask () {
    const [nome, setNome] = useState("")
    const contexto = useContext(TaskContext)

    function submitAdicaoTarefa (event) {
        event.preventDefault();

        const tarefa = {
            nome: nome,
            id: Date.now()
        };

        contexto.addTask(tarefa);
        setNome("");
    }

    return (
        <>
        <div className="add-task-container">
        <NavBar/>
        <h1>Adicione Tarefas</h1>
        <div id="formulario-adicao">
        <form type="Submit" onSubmit={submitAdicaoTarefa}>
        <label htmlFor="nomeTask"></label>
        <input id="nome-task" type="text" placeholder="Digite aqui o nome da task" onChange={e => setNome(e.target.value)} value={nome}/>
        <br />
        <button id="button-add" type="submit">Adicionar Tarefa</button>
        </form>
        </div>
        </div>
        </>
    )
}