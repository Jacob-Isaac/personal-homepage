import { IntroBlock, MyPhoto, ModeChange, Text, Name, Article, HireMeButton  } from "./styled";
import me from "../../images/me.jpg"

function Blocker() {
  
  return (
    <IntroBlock>
    <MyPhoto src={me}/>
    <ModeChange>DARK MODE OFF<button>NOC/DZIEŃ</button></ModeChange>
    {/* // .div6 { grid-area: 1 / 5 / 2 / 6; } */}
   <Text>THIS IS</Text>   {/* // .div2 { grid-area: 2 / 3 / 3 / 5; } */}
     <Name>Jakub Nowakowski</Name> {/*// .div3 { grid-area: 3 / 3 / 4 / 5; } */}
    <Article>Im passionate Frontend Developer in love with React,<br/>currently looking for new job opportunities.
    </Article> 
    {/* // .div4 { grid-area: 4 / 3 / 5 / 5; } */}
    <HireMeButton>Hire Me</HireMeButton>
    {/* // .div5 { grid-area: 5 / 3 / 6 / 5; } */}
    </IntroBlock>
  );
}

export default Blocker;