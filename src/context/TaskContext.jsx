import { useState, useEffect, createContext } from "react";

export const TaskContext = createContext();
export default TaskContext;

export function TaskProvider ({children}) {
    const [tarefas, setTarefas] = useState(() => {
        const getTarefas = localStorage.getItem("tarefas")
        if(getTarefas === null){
            return [];
        }

        return JSON.parse(getTarefas);
    });

    useEffect(() => {
        localStorage.setItem("tarefas", JSON.stringify(tarefas))
    }, [tarefas])

    function handleAddTask (task) {
        const comparacao = tarefas.find(tarefa => tarefa.nome.toLowerCase().trim() === task.nome.toLowerCase().trim());

        if(comparacao){
            return window.alert("[ATENÇÃO !! ] Esta tarefa já foi adicionada anteriormente");
        }

        if(task.nome.trim() === ""){
            return window.alert("[ATENÇÃO !!] O campo referente ao nome da tarefa não pode estar vazio")
        }

        setTarefas([...tarefas, task]);
    }

    function handleRemoveTask (task) {
        setTarefas(tarefas.filter(tarefa => tarefa.id !== task.id));
    }

    function handleEditeTask (updateTask) {
         if(updateTask.nome.trim() === ""){
            return window.alert("Nenhuma alteração realizada devida a falta de caracteres no campo.");
        }

        const comparacao = tarefas.find(tarefa => tarefa.nome.toLowerCase().trim() === updateTask.nome.toLowerCase().trim());

        if(comparacao){
            return window.alert("Nenhuma alteração realizada, pois o nome digitado no campo de alteração já existe na lista")
        }

        setTarefas(tarefas.map(tarefa => {
           return  tarefa.id === updateTask.id ? updateTask : tarefa;
        }))
    }

    const value = {
        tarefas,
        setTarefas,
        addTask: handleAddTask,
        removeTask: handleRemoveTask,
        editeTask: handleEditeTask
    }

    return (
    <TaskContext.Provider value={value}>
        {children}
    </TaskContext.Provider>
    );
}