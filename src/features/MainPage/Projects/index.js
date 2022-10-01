import Tile from "../../../components/Tiles/index"
import {Wrapper} from "../../../components/Wrapper/styled";
import Content from "../../../components/Content";
import { StyledMarker, StyledGithubLogo } from "./styled";

const Projects = ({projects}) => {

    return (

        <Content 
        icon = {<StyledGithubLogo/>} 
        title= {"Portfolio"}
        subtitle = {"My recent projects"  + " (" + projects.length + ")"} 
        body={
            <>
              <Wrapper>
                    {projects.map((project) => (
                       // <TilePerson key={person.id} person={person} personRole={person.character} />
                       <Tile key={project.id} project={project}/>
                    ))}
            </Wrapper>
            </>

            } />

    );
};

export default Projects;