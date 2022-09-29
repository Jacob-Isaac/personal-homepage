import { IntroBlock, MyPhoto, ModeChange, Text, Name, Article, HireMeButton, IconBody, Body, DarkMode, SocialMedia, SocialLink  } from "./styled";

function Footer() {
  
  return (
    <IntroBlock>
   <Text>Let's talk !</Text> 
     <Name>j.nowakowski.jakub@gmail.com</Name> 
    <Article>I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to conatct me
    </Article> 
      <SocialMedia>
        <SocialLink>Facebook</SocialLink>
        <SocialLink>LinkedIn</SocialLink>
        <SocialLink>Instagram</SocialLink>
        <SocialLink>GitHub</SocialLink>
        </SocialMedia>
    </IntroBlock>
  );
}

export default Footer;