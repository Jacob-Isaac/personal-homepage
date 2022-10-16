import styled from "styled-components";
import { ReactComponent as Loading } from "../../images/loading.svg";

export const StyledLoading = styled(Loading)`
display:flex;
align-items: center;
  height: 91px;
  transform: rotate(360deg);
  animation: spin;
  animation-duration: 1.25s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @keyframes spin {
    from {
      transform: unset;
    }
    to {
      transform: translateX(360deg);
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    height: 61px;
    }
`;
export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 66px;
margin-top: 106px;
min-width: 280px;
    `;

export const Message = styled.p`
font-weight: ${({theme}) => theme.fontSize.regular};
font-size: 20px;
letter-spacing: 0.05em;
color: #252525;
line-height: 130%;
padding-bottom: 20px;
@media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 16px;
    }
    `;