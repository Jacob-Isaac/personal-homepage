import { StyledGithubLogo, StyledInstagramLogo, StyledLinkedInLogo } from "../StyledLogos/styled";
import { IntroBlock, MyPhoto, ModeChange, Text, Mail, Article, HireMeButton, IconBody, Body, DarkMode, SocialMedia, SocialLink  } from "./styled";
import { Container } from "../Container/styled";

function Footer() {
  
  return (
    <Container>
    <IntroBlock>
   <Text>Let's talk !</Text> 
     <Mail href="mailto:j.nowakowski.jakub@gmail.com">j.nowakowski.jakub@gmail.com</Mail> 
    <Article>I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to conatct me
    </Article> 
      <SocialMedia>
        <SocialLink><StyledGithubLogo/></SocialLink>
        <SocialLink><StyledLinkedInLogo/></SocialLink>
        <SocialLink><StyledInstagramLogo/></SocialLink>
        </SocialMedia>
    </IntroBlock>
    </Container>
  );
}

export default Footer;