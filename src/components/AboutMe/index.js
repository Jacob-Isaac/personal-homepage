import { IntroBlock, MyPhoto, ModeChange, Text, Name, Article, HireMeButton  } from "./styled";
import me from "../../images/me.jpg"
import { ReactComponent as ButtonImg} from '../../images/Button-default-LM.svg';

function AboutMe() {
  
  return (
    <IntroBlock>
    <MyPhoto src={me}/>
    <ModeChange>dark mode off<button>NOC/DZIEŃ</button></ModeChange>
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