import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

function App() {
  return (
    <>
      <Global />
      <Conatainer bgColor='green'>
        <Button>Hello</Button>
        <Button bgColor='red'>Hello</Button>
      </Conatainer>
      <Conatainer bgColor='blue'>
        <Button>Hello</Button>
        <Button bgColor='blue'>Hello</Button>
      </Conatainer>
      <Conatainer bgColor='red'>
        <Button>Hello</Button>
        <Button bgColor='green'>Hello</Button>
      </Conatainer>
      <Conatainer bgColor='white'>
        <Button>Hello</Button>
        <Button bgColor='gray'>Hello</Button>
      </Conatainer>
      <Conatainer bgColor='gray'>
        <Button>Hello2</Button>
        <Button bgColor='black'>Hello</Button>
      </Conatainer>
    </>
  );
}

const Global = createGlobalStyle`
  body{
    background-color: black;
  }
`;

const Conatainer = styled.div`
  width: 100%;
  height: 200px;
  padding: 5px;
  background-color: ${props => props.bgColor};
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
  background-color: ${props => props.bgColor || 'skyblue'};
`;

export default App;
