import styled from "styled-components";
import { Props } from "./Badge";

export const BadgeContainer = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  background-color: ${({ grade }) =>
    grade === "STANDARD"
      ? "#B3B3B3"
      : grade === "PREMIUM"
      ? "#2B28CB"
      : grade === "VIP"
      ? "#F8B319"
      : grade === "SPECIAL" && "#CB283B"};
`;
export const BadgeText = styled.span`
  color: white;
  font-size: 0.1rem;
  font-weight: 900;
`;
