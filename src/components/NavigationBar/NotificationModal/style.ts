import styled from "styled-components";

export const Notification = styled.div`
    position: absolute;
    top: 43px;
    right: -127px;
    width: 375px;
    height: 433px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

export const NotificationContents = styled.div`
    width: 100%;
    height: 330px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`;

export const ProfileImg = styled.img`
    width: 38px;
    height: 38px;
`;

export const FollowBtn = styled.button`
    width: 58px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.3px solid #ccc;
    border-radius: 10px;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.09);
`;
