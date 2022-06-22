import React from 'react';
import styled from 'styled-components';

const Conatainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #bdc3c7;
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 200px;
  height: 100px;
  color: white;
  font-weight: 600;
  font-size: 35px;
  cursor: pointer;
  &:active,
  &:foucus {
    outline: none;
  }
  background-color: ${props => (props.danger ? '#e74c3c' : '#2ecc71')};
`;

function App() {
  return (
    <Conatainer>
      <Button>Hello</Button>
      <Button danger>Hello</Button>
    </Conatainer>
  );
}

export default App;
