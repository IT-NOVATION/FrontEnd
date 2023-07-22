import { Block } from "@styles/UI";
import theme from "@styles/theme";
import styled, { css } from "styled-components";

export const Wrapper = styled(Block.RowBox)<{ isLast: boolean }>`
  border-bottom: ${(props) => !props.isLast && " 1px solid #cccccc"};
  position: relative;
  margin: 12px 0 23px 0;
  padding-bottom: 12px;
`;

export const PosterContainer = styled.div<{ img: string }>`
  width: 108px;
  height: 132px;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  margin-right: 23px;
`;

export const ProfileContainer = styled.div`
  width: 108px;
  height: 132px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 23px;
`;

export const EachProfileImg = styled.img`
  width: 65px;
  border-radius: 100px;
`;

export const ReviewMainText = styled.div<{ hasSpoiler: boolean }>`
  display: inline-block;
  font-size: 15px;
  font-weight: 400;
  color: ${theme.colors.lightBlack};
  line-height: 1.3;
  margin: 0 20px 0 0;
  ${({ hasSpoiler }) =>
    hasSpoiler &&
    css`
      filter: blur(5px);
    `}
`;
export const SpoilerText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
