import React from 'react';
import Button from './Button';
import styled from 'styled-components';

const ItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
  margin-bottom: 10px;
`;

const TodoItem = ({ task, removeTask, toggleTaskCompletion }) => {
  return (
    <ItemContainer completed={task.completed}>
      <div> · {task.title}</div>
      <div>
        <Button variant="completado" size="small" onClick={() => toggleTaskCompletion(task.id)}>
          {task.completed ? 'Desmarcar' : 'Completar'}
        </Button>
        <Button variant="eliminar" size="small" onClick={() => removeTask(task.id)}>
          Eliminar
        </Button>
      </div>
    </ItemContainer>
  );
};

export default TodoItem;
