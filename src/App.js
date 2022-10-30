import React from "react";
import "./App.css";
import { Container } from "./components/Container/styled";
import SkillsBlock from "./components/SkillsBlock/index";
import AboutMe from "./components/AboutMe";
import { skillsList, toLearnList } from "../src/components/SkillsBlock/List/contents.js";
import MainPage from "./features/MainPage";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { selectIsLightMode } from "../src/features/DataSlice/githubSlice";
import { useSelector } from "react-redux";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  const lightMode = useSelector(selectIsLightMode);
  return (
    <ThemeProvider theme={lightMode === true ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Container>
        <AboutMe />
        <SkillsBlock title={"My skillset includes 🛠️"} content={skillsList} />
        <SkillsBlock
          content={toLearnList}
          title={"What i want to learn next 🚀"}
        />
        <MainPage />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
