import { Tiles, Wrapper } from "./styled";


const Tile = ({project}) => (
    <Tiles>
        <li>{project.full_name}</li>
    </Tiles>
);

export default Tile;