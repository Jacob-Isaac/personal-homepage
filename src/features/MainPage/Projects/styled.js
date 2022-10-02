import styled from "styled-components";
import { ReactComponent as Marker } from "../../../images/marker.svg";
import { ReactComponent as githubLogo } from "../../../images/github.svg";

export const StyledMarker = styled(Marker)`
    & circle {
        fill: #0366D6;
    }
`;
export const StyledGithubLogo = styled(githubLogo)`
    & path {
        fill: #0366D6;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        width: 38px;
        height: 38px;
    }
`;