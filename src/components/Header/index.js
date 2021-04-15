import React from "react";

import { animateScroll as scroll } from "react-scroll";
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
  const ToTop = () => {
    scroll.scrollTo(0);
  };

  return (
    <Nav>
      <HeaderContiner>
        <HeaderLeft>
          <HeaderLeftLogoH1 onClick={ToTop}>
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
            <HeaderRightLink
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contact
            </HeaderRightLink>
          </HeaderRightLinks>
        </HeaderRight>
      </HeaderContiner>
    </Nav>
  );
};

export default Header;
