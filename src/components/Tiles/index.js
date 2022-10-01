import { Tiles, StyledUl, Name, Description, Links, Demo, Code, Link, UlWrapper} from "./styled";



const Tile = ({project}) => (
    <Tiles>
        <UlWrapper>
        <StyledUl>
        <Name>{project.name}</Name>
        <Description>{project.description}</Description>
        <Links>
        <Demo>Demo: <Link rel="stylesheet" href={project.homepage} target="_blank">{project.homepage}</Link></Demo>
        <Code>Code: <Link rel="stylesheet" href={project.html_url} target="_blank">{project.html_url}</Link></Code>
        </Links>
        </StyledUl>
        </UlWrapper>
    </Tiles>
);

export default Tile;