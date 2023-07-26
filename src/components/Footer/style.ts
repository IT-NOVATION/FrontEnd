import styled from "styled-components";

export const FooterLayout = styled.footer`
  width: 100vw;
  height: 100px;
  background-color: #f4f6f8;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FooterBox = styled.div`
  width: 763px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LogoBox = styled.div`
  width: 171px;
  height: 44px;
  border-right: 1px solid #b3b3b3;
  justify-content: flex-start;
`;
export const Text = styled.div<{ margin?: string }>`
  display: inline-block;
  color: #5f5f5f;
  font-size: 11px;
  font-weight: 400;
  line-height: 16.5px;
  margin: ${({ margin }) => margin};
`;
export const Logo = styled.img`
  width: 141px;
  height: 41px;
`;
export const SNSIcon = styled.img`
  cursor: pointer;
`;
