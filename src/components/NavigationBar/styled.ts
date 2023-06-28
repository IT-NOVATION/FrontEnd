import styled from "styled-components";

export const Nav = styled.div<{ fixed: boolean; overflow: number; isMain: boolean }>`
    width: 100vw;
    /* height: ${props => `${props.overflow}px`}; */
    /* position: ${props => props.fixed && "fixed"}; */
    height: 85px;
    z-index: 100;
    padding: 20px 23px;

    /* position: fixed;
    transform: translate(-50%);
    transition: all 0s; */

    display: flex;
    justify-content: space-between;
    background-color: ${({ isMain }) => (isMain ? "transparent" : "white")};
`;

export const HomeLogo = styled.img`
    width: 185px;
    cursor: pointer;
`;

export const Profile = styled.img`
    width: 31px;
    border-radius: 100px;
`;

export const Icons = styled.img`
    width: 31px;
    border-radius: 100px;
    cursor: pointer;
`;
