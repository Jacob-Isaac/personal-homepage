import { Wrapper, Title, Portfolio, Subtitle } from "./styled.js";

const Content = ({ icon, title, subtitle, body }) => (
  <Wrapper>
    <Title>
      {icon}
      <Portfolio>{title}</Portfolio>
      <Subtitle>{subtitle}</Subtitle>
    </Title>
    {body}
  </Wrapper>
);

export default Content;
