# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 🧩 HR Workflow Designer (React + React Flow)

A visual workflow builder that allows HR admins to design and simulate internal workflows such as onboarding, leave approvals, and document verification.

This is a **functional prototype** built using React and React Flow, focusing on core workflow design, node configuration, and simulation.

---

## 🚀 Features

### 🔹 Workflow Canvas

* Add nodes dynamically from sidebar
* Connect nodes to define workflow sequence
* Interactive React Flow canvas
* Node selection and editing

### 🔹 Node Types (Current Implementation)

* ✅ **Task Node** – Human task (e.g., collect documents)


## 🔹 Node Configuration Panel

* Edit node properties dynamically
* Current supported fields:

  * Title
  * Description
  * Assignee
  * Due Date


## 🔹 Mock API Integration

* Simulated API for workflow execution
* Returns step-by-step execution results


## 🔹 Workflow Simulation

* Serialize workflow structure
* Run simulation
* Display execution output


## 🛠️ Tech Stack

* **React (Vite)**
* **React Flow**
* **JavaScript (ES6)**
* **Axios**
* **UUID**


## 📁 Project Structure

```
src/
├── components/
│   ├── Sidebar.jsx
│   ├── Canvas.jsx
│   ├── NodePanel.jsx
│   ├── SimulationPanel.jsx
│
├── nodes/
│   ├── TaskNode.jsx  
│
├── hooks/
│   ├── useWorkflow.js
│
├── api/
│   ├── mockApi.js
│
├── App.jsx
├── main.jsx
```


## ⚙️ Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/your-username/hr-workflow-designer.git
cd hr-workflow-designer
```

### 2. Install dependencies

```
npm install
```

### 3. Run the project

```
npm run dev
```

### 4. Open in browser

```
http://localhost:5173
```


## 🧪 How to Use

1. Click on "Task Node" from sidebar
2. Add multiple nodes to canvas
3. Connect nodes (if enabled)
4. Click a node to edit details
5. Run simulation to test workflow


## 📌 Key Design Decisions

* **Custom Hook (`useWorkflow`)** for centralized state management
* **Component-based architecture** for scalability
* **Dynamic node editing panel**
* **Mock API layer** for simulation
* Clean separation of UI and logic


## 👨‍💻 Author

Keshav Goyal

Give it a star on GitHub ⭐
