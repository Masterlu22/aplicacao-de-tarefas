import ListTasks from "../components/ListTasks";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Home () {
    const context = useContext(TaskContext)
    return (
        <>
        <NavBar/>
        <div className="home-container">
        <div>
            <h1>Tarefas</h1>
            <p>Lista das tarefas as quais você adicionou: </p>
           <div id="tarefas">{context.tarefas.length > 0 ? (<ListTasks />) : ("Suas tarefas aparecerão aqui")}</div>
           </div>
        <Link to="/"><button id="botao-voltar-pagina-inicial">Voltar</button></Link>
        </div>
        </>

    )
} 