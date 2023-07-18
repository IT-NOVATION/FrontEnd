import styled from "styled-components";

export const Button = styled.div<{ isHovered: boolean }>`
    width: 168px;
    height: 45px;
    border-radius: 14px;
    background: ${({ isHovered }) => (isHovered ? "#af35fe" : "#5F5F5F")};
    box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 0 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`;

export const DetailWrapper = styled.div`
    padding: 14px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
`;
