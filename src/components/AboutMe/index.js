import { IntroBlock, MyPhoto, ModeChange, Text, Name, Article, HireMeButton, IconBody, Body, DarkMode  } from "./styled";
import me from "../../images/me.jpg"
import { ReactComponent as ButtonImg} from '../../images/hireMe.svg';
 import { ReactComponent as SunIcon } from "../../images/SunIcon.svg";

function AboutMe() {
  
  return (
    <IntroBlock>
    <MyPhoto src={me}/>
    <ModeChange><DarkMode>DARK MODE OFF</DarkMode><IconBody><Body><SunIcon/></Body></IconBody></ModeChange>
   <Text>THIS IS</Text> 
     <Name>Jakub Nowakowski</Name> 
    <Article>⭐✌️ I'm passionate Frontend Developer in love with React, currently looking for new job opportunities.
    </Article> 
    <HireMeButton href="mailto:j.nowakowski.jakub@gmail.com">
      <ButtonImg/>
      </HireMeButton>
    </IntroBlock>
  );
}

export default AboutMe;