import styled from 'styled-components';
import { ReactComponent as Marker } from "../../../images/marker.svg"

export const ListWrapper = styled.section`
    padding: 32px;
    margin: 72px 0;
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
    background-color: white;
`;

export const ListHeader = styled.h2`
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    letter-spacing: 0.05em;
    margin: 0;
    padding-bottom: 15px;
    border-bottom: 1px solid black;
`;

export const StyledList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 0;
    margin: 24px 0 0;
    list-style-type: none;
`;

export const StyledMarker = styled(Marker)`
    margin-right: 16px;
    flex-shrink: 0;
    & circle {
        fill: black;
    }

`;

export const ListItem = styled.li`
    display: inline-flex;
    align-items: center;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.05em;
    padding: 4px;
    color: black;
`;

