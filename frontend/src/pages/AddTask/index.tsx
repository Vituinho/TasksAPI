import { TaskAdd } from "../../components/TaskAdd";

export function AddTask() {
    return (
        <div className="container">
            <div className="d-flex align-items-center mb-4 mt-3">
                <div className="flex-grow-1 text-center">
                    <h1 className="m-0 text-dark">Adicionar Tarefa</h1>
                </div>
                <a href="/tasks" className="btn btn-primary me-3">
                    Minhas tarefas
                </a>
            </div>
            <TaskAdd />
        </div>
    );
}