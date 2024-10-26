import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, removeTask, toggleTaskCompletion }) => {
  return (
    <div>
      <h2>Lista de Tareas:</h2>
      <ul>
        {tasks.map(task => (
          <TodoItem 
            key={task.id} 
            task={task} 
            removeTask={removeTask} 
            toggleTaskCompletion={toggleTaskCompletion} 
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
