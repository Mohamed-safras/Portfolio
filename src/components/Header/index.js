import React from "react";
import {
  Nav,
  HeaderContiner,
  HeaderLeft,
  HeaderRight,
  HeaderLeftLogoH1,
  HeaderRightLink,
  HeaderRightLinks,
  Span,
} from "../../components/Header/style";
const Header = () => {
  return (
    <Nav>
      <HeaderContiner>
        <HeaderLeft>
          <HeaderLeftLogoH1>
            CC<Span></Span>
          </HeaderLeftLogoH1>
        </HeaderLeft>
        <HeaderRight>
          <HeaderRightLinks>
            <HeaderRightLink
              to="section"
              spy={true}
              smooth={true}
              duration={500}
            >
              Work
            </HeaderRightLink>
            <HeaderRightLink to="">Contact</HeaderRightLink>
          </HeaderRightLinks>
        </HeaderRight>
      </HeaderContiner>
    </Nav>
  );
};

export default Header;
