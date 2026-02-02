import React, { useState } from "react";

import styles from './style.module.css';

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
        
        if(response.ok) {
            window.location.href = "/tasks";
        }

    } catch (error) {
        console.error(error);
    }

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="container">
                <div className="row">
                    <div className="mb-3">
                        <label className="form-label">Título</label>
                        <input
                            className="form-control"
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Descrição</label>
                        <input
                            className="form-control"
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-check form-switch mb-3">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="status"
                            checked={formData.status}
                            onChange={handleChange}
                        />
                        <label className="form-check-label">
                            {formData.status ? "Ativo" : "Inativo"}
                        </label>
                    </div>
                </div>
            </div>

            <button className="btn btn-primary" type="submit">Criar Task</button>
        </form>
    )
}