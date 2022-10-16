import { Tiles, StyledUl, Name, Description, Links, Demo, Code, Link} from "./styled";



const Tile = ({project}) => (
    <Tiles>
        <StyledUl>
        <Name>{project.name}</Name>
        <Description>{project.description}</Description>
        <Links>
        <Demo>Demo: <Link rel="stylesheet" href={project.homepage} target="_blank">{project.homepage}</Link></Demo>
        <Code>Code: <Link rel="stylesheet" href={project.html_url} target="_blank">{project.html_url}</Link></Code>
        </Links>
        </StyledUl>
    </Tiles>
);

export default Tile;