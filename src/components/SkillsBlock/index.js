import { Block, Title, Article, StyledMarker } from "./styled";
import { ListWrapper, ListHeader, StyledList, ListItem } from "../SkillsBlock/List/styled";


const SkillsBlock = ({title, content}) => (
    //<Wrapper>
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
    //</Wrapper>
);

export default SkillsBlock;