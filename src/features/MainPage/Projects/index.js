import Tile from "../../../components/Tiles/index"
import {Wrapper} from "../../../components/Wrapper/styled";
import Content from "../../../components/Content";

const Projects = ({projects}) => {

    return (

        <Content title= {"Projects" + " (" + projects.length + ")"}
            body={
              <Wrapper>
                    {projects.map((project) => (
                       // <TilePerson key={person.id} person={person} personRole={person.character} />
                       <Tile key={project.id} project={project}/>
                    ))}
            </Wrapper>
            } />

    );
};

export default Projects;