import {
    ErrorContainer,
    Title,
    Text,
    Button,
    StyledDangerIcon,
  } from "./styled";
  
  function ErrorPage() {
    return (
    
        <ErrorContainer>
        <StyledDangerIcon />
        <Title>Ooops! Something went wrong...</Title>
        <Text>
        Sorry, failed to load Github projects.<br/>
You can check them directly on Github.
        </Text>
        <Button href="https://github.com/Jacob-Isaac">Go to Github</Button>
        </ErrorContainer>
    );
  }
  
  export default ErrorPage;
  