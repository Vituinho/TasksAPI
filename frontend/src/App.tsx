import { BrowserRouter, Route, Routes } from "react-router";
import { TasksList } from "./pages/TasksList";
import { AddTask } from "./pages/AddTask";

export function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/tasks" element={<TasksList />} />
        <Route path="/tasks/add" element={<AddTask/>} />
        <Route path="*" element={<TasksList/>} />
      </Routes>      
    </BrowserRouter>
    </>
  )
}

/* 
  paginas que terão que ter:
    - lista de tarefas com botão de deletar
    - adicionar tarefa
    - editar tarefa
*/