import React from "react";
import styled from "styled-components";

const NavContainer = styled.nav`
  position: relative;
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.theme.bg};
  padding: 0 1rem;
  border-bottom: 1px solid ${(props) => props.theme.bgAccent};
`;
const NavWrapper = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin: 0px;
  padding: 0.3rem 0;
  max-width: 98%;
  height: 100%;
`;

const Navbar: React.FC = ({ children }) => {
  return (
    <NavContainer>
      <NavWrapper>{children}</NavWrapper>
    </NavContainer>
  );
};

export default Navbar;
