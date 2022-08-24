import React from 'react';
import './App.css';
import { Container } from './components/Container/styled';
import { Block, ImgBlock } from './components/Block/styled';
import { Wrapper, Tile } from './components/Tiles/styled';
import Blocker from './components/Block';

function App() {
  return (
  <Container>
    <Blocker/>
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
