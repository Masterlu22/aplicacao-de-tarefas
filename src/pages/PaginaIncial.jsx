import { Link } from "react-router-dom";

export default function PaginaInicial () {
    return (
        <>
        <div id="pagina-inicial">
            <h1>Gerenciador de tarefas</h1>
            <p>Organize-se de forma simples e rápida</p>
            <Link to="/pages/Home">
            <button id="botao-pagina-inicial">Ir para Home</button>
            </Link>
        </div>
        </>
    )
}