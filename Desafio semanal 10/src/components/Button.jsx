import React from 'react';
import styled from 'styled-components';

const StyleButton = styled.button`
    background-color: ${props => {
    if (props.variant === "principal") return "#000";
    if (props.variant === "eliminar") return "#f70000";
    if (props.variant === "completado") return "#7abb02";
    return "#ccc";
  }};
    color: whitesmoke;
    padding: ${props => (props.size === "small" ? "5px 10px" : "10px 20px")}; 
    font-size: ${props => (props.size === "small" ? "14px" : "16px")};
    border-radius: 5px;
    margin: 0 5px;  
    border: none; 

    &:hover {
        background-color: ${props => {
    if (props.variant === "principal") return "blueviolet";
    if (props.variant === "eliminar") return "#920909";
    if (props.variant === "completado") return "#528802";
  }};
    }
`;

const Button = ({ onClick, children, variant, size }) => {
  return (
    <StyleButton onClick={onClick} variant={variant} size={size}>
      {children}
    </StyleButton>
  );
}

export default Button;
