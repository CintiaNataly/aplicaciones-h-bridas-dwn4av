import React from 'react';
import styled from 'styled-components'; 
import Button from './Button';

const Input = styled.input.attrs(props => ({
  type: "text",
  placeholder: "Escribe aquí..."
}))`
  padding: 10px;
  border-radius: 5px;
`;

const Header = ({ taskInput, setTaskInput, addTask }) => {
  return (
    <div>
      Desafío semanal 10 - App Híbridas
      <p>Agregar una nueva tarea:</p>
      <Input value={taskInput} onChange={(e) => setTaskInput(e.target.value)} />
      <Button variant="principal" onClick={addTask}>Agregar tarea</Button>
    </div>
  );
};

export default Header;
