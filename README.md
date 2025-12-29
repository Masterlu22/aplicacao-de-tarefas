# aplicacao-de-tarefas - Gereciador de tarefas

# 📝 Gerenciador de Tarefas (To-Do List em React)

Aplicação desenvolvida em **React** para gerenciamento de tarefas, permitindo **adicionar, visualizar, editar e excluir tarefas**, com persistência de dados no **localStorage**.  
O projeto utiliza **React Router**, **Context API** e **Hooks**, seguindo boas práticas de organização e componentização.
Este projeto foi desenvolvido para fins educacionais, com o objetivo de cumprir os requisitos dos projetos de certificação do curso de **React**, disponibilizado pela plataforma **DevStart** em parceria com o **SENAI**.


---

## 🚀 Funcionalidades

- ✅ Adicionar novas tarefas
- 📋 Listar tarefas cadastradas
- ✏️ Editar tarefas existentes
- ❌ Excluir tarefas
- 🔁 Persistência de dados com `localStorage`
- 🧭 Navegação entre páginas com React Router
- ⚠️ Validações (campo vazio e tarefas duplicadas)

---

## 🧠 Conceitos Utilizados

- React
- React Router DOM
- Context API
- Hooks (`useState`, `useEffect`, `useContext`)
- Persistência com `localStorage`
- Componentização
- Rotas e navegação

---

## 🛠️ Tecnologias

- **React**
- **React Router DOM**
- **JavaScript (ES6+)**
- **HTML5**
- **CSS3**
- **Vite** 

---

## ▶️ Como Executar o Projeto

### 📌 Pré-requisitos
Antes de começar, você precisa ter instalado:
- [Node.js](https://nodejs.org/)
- npm ou yarn

---

### 📥 Clone o repositório

```bash
git clone https://github.com/Masterlu22/aplicacao-de-tarefas.git

Entre na pasta do projeto:
cd aplicacao-de-tarefas

📦 Instale as dependências:
npm install
ou
yarn

▶️ Execute a aplicação:
npm run dev
ou, se for CRA:
npm start

A aplicação estará disponível em:
http://localhost:5173
ou
http://localhost:3000

```
---
## 🧭 Rotas da Aplicação:

* "/" ⇾ Página inicial
* "/pages/Home" ⇾ Lista de tarefas
* "/pages/AddTask" ⇾ Adicionar nova tarefa
* "*" ⇾ Página não encontrada

## 💾 Persistência de Dados
As tarefas são armazenadas no localStorage do navegador, garantindo que os dados permaneçam salvos mesmo após recarregar a página.

## 🎯 Objetivo do Projeto
Este projeto foi desenvolvido com fins educacionais, com o objetivo de praticar:

Gerenciamento de estado global com Context API

Navegação entre páginas com React Router

Uso correto de hooks

Organização de projetos React

👨‍💻 Autor
Lucas da Silva Rocha <br />
GitHub: @Masterlu22