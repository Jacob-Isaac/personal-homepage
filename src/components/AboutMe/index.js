import { IntroBlock, MyPhoto, ModeChange, Text, Name, Article, HireMeButton, IconBody, Body, DarkMode, StyledButtonImg  } from "./styled";
import me from "../../images/me.png"
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../../features/DataSlice/githubSlice";

 import { ReactComponent as SunIcon } from "../../images/SunIcon.svg";

function AboutMe() {

  const dispatch = useDispatch();
  
  return (
    <IntroBlock>
    <MyPhoto src={me}/>
    <ModeChange><DarkMode>DARK MODE OFF</DarkMode><IconBody onClick={() => dispatch(changeTheme())}><Body><SunIcon/></Body></IconBody></ModeChange>
   <Text>THIS IS</Text> 
     <Name>Jakub Nowakowski</Name> 
    <Article>⭐✌️ I'm passionate Frontend Developer in love with React, currently looking for new job opportunities.
    </Article> 
    <HireMeButton href="mailto:j.nowakowski.jakub@gmail.com">
      <StyledButtonImg/>
      </HireMeButton>
    </IntroBlock>
  );
}

export default AboutMe;