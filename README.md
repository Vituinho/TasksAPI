# 📋 TasksAPI

TasksAPI é uma aplicação **full stack** criada para estudo e prática de desenvolvimento moderno utilizando **Laravel no backend** e **React + TypeScript no frontend**, seguindo o padrão de **API REST**.

O projeto permite gerenciar tarefas, alternando entre os estados **pendente** e **concluída**, com atualização dinâmica da interface sem necessidade de recarregar a página.

---

## 🧠 Sobre o Projeto

Este projeto foi desenvolvido com o objetivo de aprender e consolidar conceitos como:

- Criação de APIs RESTful com Laravel
- Consumo de API no frontend usando React
- Gerenciamento de estado com React Hooks
- Comunicação assíncrona entre frontend e backend
- Boas práticas de organização de código

A aplicação é dividida em duas partes independentes:
- **Backend** → responsável pela lógica e persistência dos dados
- **Frontend** → responsável pela interface e interação com o usuário

---

## ✨ Funcionalidades

- ✅ Listar tarefas
- 🔁 Marcar tarefas como concluídas ou pendentes
- ⚡ Atualização instantânea da interface (sem reload)
- 🧩 Estrutura simples e organizada para aprendizado

---

## 🛠 Tecnologias Utilizadas

### Backend
- PHP
- Laravel
- API REST
- MySQL / SQLite (configurável)

### Frontend
- React
- TypeScript
- Vite
- Fetch API
- Bootstrap (para estilos)

---

## 📁 Estrutura do Projeto

TasksAPI/<br>
├── backend/ # Aplicação Laravel<br>
│ ├── app/<br>
│ ├── routes/<br>
│ ├── database/<br>
│ └── ...<br>
├── frontend/ # Aplicação React + TypeScript<br>
│ ├── src/<br>
│ ├── public/<br>
│ └── ...<br>
└── README.md<br>

---

## 🚀 Como Rodar o Projeto

### 📌 Pré-requisitos

Antes de começar, você precisa ter instalado:

- PHP 8+
- Composer
- Node.js e npm
- Git
- Banco de dados (MySQL ou SQLite)

---

## 🐘 Backend (Laravel)

1. Clone o repositório:

git clone https://github.com/Vituinho/TasksAPI.git
cd TasksAPI/backend

2. Crie o arquivo de ambiente:

cp .env.example .env

3. Instale as dependências:

composer install


Gere a chave da aplicação:

php artisan key:generate


Configure o banco de dados no arquivo .env

Rode as migrations:

php artisan migrate


Inicie o servidor:

php artisan serve


📍 Backend rodando em: http://127.0.0.1:8000

⚛️ Frontend (React)

Vá para a pasta do frontend:

cd ../frontend


Instale as dependências:

npm install


Inicie o servidor:

npm run dev


📍 Frontend rodando em: http://localhost:5173

🔌 Endpoints da API
📄 Listar tarefas
GET /api/tasks

🔁 Atualizar status da tarefa
PATCH /api/tasks/{id}/updatestatus


Esse endpoint alterna automaticamente entre pendente e concluída.

⚡ Atualização Otimista (Optimistic UI)

No frontend, a interface é atualizada imediatamente após o clique, antes mesmo da resposta do backend, proporcionando uma experiência mais rápida e fluida para o usuário.

Esse padrão é muito utilizado em aplicações modernas para melhorar a percepção de desempenho.

🛡️ Licença

Este projeto está sob a licença MIT.
Você é livre para usar, modificar e distribuir.

🤝 Contribuição

Fique à vontade para:

Melhorar o código

Adicionar novas funcionalidades

Refatorar componentes

Criar testes

Pull requests são bem-vindos 🚀

📌 Observações Finais

Este projeto é ideal para quem está aprendendo:

Laravel + React

Integração frontend/backend

APIs REST

Hooks e estado no React

Se você está estudando desenvolvimento web full stack, esse projeto serve como uma ótima base 👍

