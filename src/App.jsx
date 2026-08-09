import React, { useState } from 'react';
import Column from './Column';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Sample Task 1', status: 'todo' },
    { id: 2, title: 'Sample Task 2', status: 'inprogress' },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
      status: 'todo',
    };

    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleMoveTask = (id, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <div className="app-container">
      <h1>Trello-Style Visual Board</h1>
      
      <form onSubmit={handleAddTask} className="task-form">
        <input
          type="text"
          placeholder="Enter new task..."
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      <div className="board-columns">
        <Column
          title="To Do"
          status="todo"
          tasks={tasks}
          onDelete={handleDeleteTask}
          onMove={handleMoveTask}
        />
        <Column
          title="In Progress"
          status="inprogress"
          tasks={tasks}
          onDelete={handleDeleteTask}
          onMove={handleMoveTask}
        />
        <Column
          title="Done"
          status="done"
          tasks={tasks}
          onDelete={handleDeleteTask}
          onMove={handleMoveTask}
        />
      </div>
    </div>
  );
}

export default App;

  