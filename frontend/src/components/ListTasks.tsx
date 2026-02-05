import { useEffect, useState } from "react";

type Task = {
    id: number;
    title: string;
    description: string;
    status: boolean;
}

export function ListTasks() {
    const [tasks, setTasks] = useState([]);
    
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/task")
            .then(response => response.json())
            .then(data => setTasks(data));
    }, []);

    async function handleStatus(taskID: number) {
    try {
        await fetch(
            `http://127.0.0.1:8000/api/tasks/${taskID}/updatestatus`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
            }   
        );

        const response = await fetch("http://127.0.0.1:8000/api/task");
        const data = await response.json();
        setTasks(data);

        if (!response.ok) {
            throw new Error("Erro ao concluir a task");
            }

            const updatedTask = await response.json();

            console.log("Task concluída:", updatedTask);

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Descrição</th>
                    <th>Status</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task: Task) => (
                    <tr key={task.id}>
                        <td>{task.id}</td>
                        <td>{task.title}</td>
                        <td>{task.description}</td>
                        <td>{task.status ? "Concluida" : "Pendente"}</td>
                        <td>
                            <button 
                                
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}