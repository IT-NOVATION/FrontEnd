import theme from "@styles/theme";
import styled from "styled-components";

export const Label = styled.div<{ selected: boolean }>`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 9px;
  border-bottom: 1px solid
    ${({ selected }) => (selected ? theme.colors.gray : "#F5F5F7")};
  cursor: pointer;
`;
export const ExitIcon = styled.img`
  cursor: pointer;
`;
export const UserLayout = styled.div`
  width: 100%;
  overflow-y: auto;
  padding: 18px 9px 18px 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
