import { NavLink } from "react-router-dom";

export default function NavBar () {
    return (  <nav>
              <NavLink 
                to="/pages/Home" 
                end 
                className={({ isActive }) => isActive ? "active" : ""}
              >
                Home
              </NavLink>
              
              <NavLink 
                to="/pages/AddTask" 
                className={({ isActive }) => isActive ? "active" : ""}
              >
                Adicionar Tarefas
              </NavLink>
        </nav>
    )
}