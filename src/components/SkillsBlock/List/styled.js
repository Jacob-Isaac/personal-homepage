import styled from 'styled-components';

export const StyledList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 0px;
    column-gap: 15px;
    list-style-type: none;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.miniMobile}px) {
        grid-template-columns: repeat(1, 1fr);
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
    color:  ${({ theme }) => theme.color.text};
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 14px;
    }
`;

