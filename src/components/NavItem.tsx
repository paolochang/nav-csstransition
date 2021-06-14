/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import styled from "styled-components";

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 30px;
  height: 30px;
`;
const IconClick = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.bgAccent};
  text-decoration: none;
  width: inherit;
  height: inherit;
  border-radius: 50%;
  transition: filter 300ms;
  &:hover {
    filter: brightness(1.2);
  }
`;
const IconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  fill: ${(props) => props.theme.textColor};
  width: 20px;
  height: 20px;
`;

interface Props {
  icon: any;
}

const NavItem: React.FC<Props> = ({ icon, children }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    console.log(open);
    setOpen(!open);
  };

  return (
    <Item>
      <IconClick onClick={toggleMenu}>
        <IconDiv>{icon}</IconDiv>
      </IconClick>
      {open && children}
    </Item>
  );
};

export default NavItem;
