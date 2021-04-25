import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: 0;
  outline: none;
  cursor: pointer;
`;

const Button = ({ children, ...props }) => {
  return <Btn {...props}>{children}</Btn>;
};

export default Button;
