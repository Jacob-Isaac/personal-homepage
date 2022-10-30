import { Block, Title, StyledMarker } from "./styled";
import { StyledList, ListItem } from "../SkillsBlock/List/styled";

const SkillsBlock = ({ title, content }) => (
  <Block>
    <Title>{title}</Title>
    <StyledList>
      {content.map((item, index) => (
        <ListItem key={index}>
          <StyledMarker />
          {item}
        </ListItem>
      ))}
    </StyledList>
  </Block>
);

export default SkillsBlock;
