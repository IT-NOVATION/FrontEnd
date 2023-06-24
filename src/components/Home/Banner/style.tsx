import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Slide = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

export const SlideHidden = styled.div`
    display: none;
`;

export const SlideImg = styled.img`
    width: 1920px;
    height: 526px;
`;

export const LeftBtn = styled.button`
    position: absolute;
    left: 5vw;
    width: 2rem;
    height: 2rem;
    border: 1px solid red;
    cursor: pointer;
`;

export const RightBtn = styled.button`
    position: absolute;
    right: 5vw;
    width: 2rem;
    height: 2rem;
    border: 1px solid red;
    cursor: pointer;
`;

export const Indicators = styled.span`
    display: flex;
    position: absolute;
    bottom: 1rem;
`;

export const IndicatorOn = styled.button`
    background-color: gray;
    width: 0.5rem;
    height: 0.7rem;
    border-radius: 100%;
    border: none;
    outline: none;
    margin: 0 0.2rem;
    cursor: pointer;
`;

export const IndicatorOff = styled.button`
    background-color: white;
    width: 0.5rem;
    height: 0.7rem;
    border-radius: 100%;
    border: none;
    outline: none;
    margin: 0 0.2rem;
    cursor: pointer;
`;
