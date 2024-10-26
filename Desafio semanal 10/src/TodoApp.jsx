import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput) {
      setTasks([...tasks, { id: Date.now(), title: taskInput, completed: false }]);
      setTaskInput('');
    }
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div>
      <Header taskInput={taskInput} setTaskInput={setTaskInput} addTask={addTask} />
      <TodoList tasks={tasks} removeTask={removeTask} toggleTaskCompletion={toggleTaskCompletion} />
      <Footer tasks={tasks} />
    </div>
  );
}

export default TodoApp;
