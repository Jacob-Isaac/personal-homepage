import { Block, Title, Article } from "./styled";
import { ListWrapper, ListHeader, StyledList, ListItem, StyledMarker } from "../SkillsBlock/List/styled";


const SkillsBlock = ({title, content}) => (
    //<Wrapper>
    <Block>
   <Title>{title}</Title>
    <StyledList>
    {/* {content.map((item, index) => (
                <ListItem key={index}>
                    <StyledMarker />
                    {item}
                </ListItem>
            ))} */}
            {content}
        </StyledList>
    </Block>
    //</Wrapper>
);

export default SkillsBlock;