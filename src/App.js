import React from 'react';
import './App.css';
import { Container } from './components/Container/styled';
import { Block } from './components/AboutMe/styled';
import { Wrapper, Tile } from './components/Tiles/styled';
import AboutMe from './components/AboutMe';

function App() {
  return (
  <Container>
    <AboutMe/>
    <Block/>
    <Block/>
    <Wrapper>
    <Tile/>
    <Tile/>
    <Tile/>
    <Tile/>
    </Wrapper>
  </Container>
  );
}

export default App;
