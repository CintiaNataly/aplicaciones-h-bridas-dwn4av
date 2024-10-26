import React from 'react';

const Footer = ({ tasks }) => {
  const pendingTasks = tasks.filter(task => !task.completed).length;
  return (
    <div>
      <hr />
      <p>Tareas pendientes: {pendingTasks}</p>
      Cintia Bustos - Diseño y programación Web
    </div>
  );
};

export default Footer;
