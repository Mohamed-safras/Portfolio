import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  padding: 12px 0;
  height: 70px;
  z-index: 999;
  background-color: rgb(9, 28, 41);
  color: #fff;
`;
export const HeaderContiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 83%;
  margin-left: auto;
  margin-right: auto;
`;
export const HeaderLeft = styled.div``;

export const HeaderRight = styled.div`
  display: flex;
`;

export const Span = styled.span`
  display: inline-block;
  border-radius: 9999px;
  background-color: #fc8181;
  width: 0.75rem;
  height: 0.75rem;
  margin-left: 0.5rem;
  --bg-opacity: 1;
`;
export const HeaderLeftLogoH1 = styled.h1`
  font-size: 30px;
  cursor: pointer;
`;

export const HeaderRightLink = styled(LinkS)`
  margin-left: 16px;
  margin-left: 16px;
  font-size: 20px;
  cursor: pointer;
`;

export const HeaderRightLinks = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
