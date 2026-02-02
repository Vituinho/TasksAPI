import React, { useEffect, useState } from "react";

type TaskCreate = {
    title: string;
    description: string;
    status: boolean;
}

export function TaskAdd() {
    const [formData, setFormData] = useState<TaskCreate>({
        title: '',
        description: '',
        status: false,
    });
    
    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value, type, checked } = event.target;

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
        const response = await fetch("http://127.0.0.1:8000/api/task", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData), 
        });

        if(!response.ok) {
            throw new Error("Erro ao criar a task");
        }

        setFormData({
            title: '',
            description: '',
            status: false,
        });
    } catch (error) {
        console.error(error);
    }

    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Título:</label>
                <input 
                    type="text"
                    name='title'
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Descrição:</label>
                <input 
                    type="text"
                    name='description'
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Status:</label>
                <input 
                    type="checkbox"
                    name='status'
                    onChange={handleChange}
                    required
                />
            </div>

            <button type="submit">Criar Task</button>
        </form>
    )
}