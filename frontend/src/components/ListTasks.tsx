import { useEffect, useState } from "react";

export function ListTasks() {
    const [tasks, setTasks] = useState([]); 
    
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/task")
            .then(response => response.json())
            .then(data => setTasks(data));
    }, []);

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Descrição</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task: any) => (
                    <tr key={task.id}>
                        <td>{task.id}</td>
                        <td>{task.title}</td>
                        <td>{task.description}</td>
                        <td>{task.status ? "Concluida" : "Pendente"}</td>
                    </tr>
                ))};
            </tbody>
        </table>
    )
}