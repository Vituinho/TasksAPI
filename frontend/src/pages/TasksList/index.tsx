import { ListTasks } from '../../components/ListTasks';
import './style.module.css'

export function TasksList() {
    return (
        <>
            <div className="container">
                <div className="d-flex align-items-center mb-4 mt-3">
                    <div className="flex-grow-1 text-center">
                        <h1 className="m-0 text-dark">Minhas Tarefas</h1>
                    </div>
                    <a href="/tasks/add" className="btn btn-primary me-3">
                        Nova tarefa
                    </a>
                </div>
                <ListTasks />
            </div>
        </>
    );
}