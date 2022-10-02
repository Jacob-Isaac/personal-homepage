import React from 'react';
import './App.css';
import { Container } from './components/Container/styled';
import SkillsBlock from './components/SkillsBlock/index';
import { Wrapper, Tiles } from './components/Tiles/styled';
import AboutMe from './components/AboutMe';
import { skillsList, toLearnList } from '../src/components/SkillsBlock/List/contents.js';
import MainPage from './features/MainPage';
import Footer from "./components/Footer"

function App() {
  console.log(skillsList);
  return (
  <Container>
    <br/>
    <br/>
    // construction in progress
    <AboutMe/>
    <SkillsBlock 
    title={"My skillset includes 🛠️"}
    content={skillsList}
    />
    <SkillsBlock content={toLearnList} title={"What i want to learn next 🚀"}/>
    <MainPage/>
    <Footer/>
  </Container>
  );
}

export default App;
