import styled from "styled-components";

export const Button = styled.div<{ isHovered: boolean }>`
    width: 168px;
    height: 45px;
    border-radius: 14px;
    background: ${({ isHovered }) => (isHovered ? "#af35fe" : "#5F5F5F")};
    box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 0 26px 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`;

export const DetailWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    overflow: scroll;
    padding: 14px 20px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.41);
    background: rgba(0, 0, 0, 0.25);
    /* box-shadow: 4px 4px 10px 0px rgba(204, 204, 204, 0.47); */
`;

export const AbsolutePosterImg = styled.img`
    width: 1286px;
    height: 450px;
    opacity: 0.3;
`;
