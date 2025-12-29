import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import AddTask from './pages/AddTask.jsx';
import NotFound from './pages/NotFound.jsx';
import { TaskProvider } from './context/TaskContext.jsx';
import PaginaInicial from './pages/PaginaIncial.jsx';

function App() {
  return (
    <BrowserRouter>
      <>
        <main>
          <TaskProvider>
          <Routes>
            <Route path="/" element={<PaginaInicial />}/>
            <Route path="/pages/Home" element={<Home />} />
            <Route path="/pages/AddTask" element={<AddTask />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </TaskProvider>
        </main>
      </>
    </BrowserRouter>
  );
}

export default App;