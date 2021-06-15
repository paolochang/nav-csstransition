import React, { useRef, useState } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import "./DropdownMenu.css";
import { useClickOutside } from "../hooks/useClickOutside";
import DropdownItem from "./DropdownItem";
import { ReactComponent as CogIcon } from "./icons/cog.svg";
import { ReactComponent as ChevronIcon } from "./icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";
import { ReactComponent as User } from "./icons/user.svg";
import { ReactComponent as Sun } from "./icons/sun.svg";
import { ReactComponent as Moon } from "./icons/moon.svg";

const Container = styled.div`
  position: absolute;
  top: 58px;
  width: 300px;
  transform: translateX(-45%);
  background-color: ${(props) => props.theme.bg};
  border: 1px solid ${(props) => props.theme.bgAccent};
  border-radius: 8px;
  padding: 1rem;
  overflow: hidden;
  transition: height 200ms ease;
`;
const MenuDiv = styled.div`
  width: 100%;
`;

interface IDropdownMenu {
  isOpen: boolean;
  setIsOpen: any;
  activeMenu: string;
  setActiveMenu: any;
  setDarkMode: any;
}

const DropdownMenu: React.FC<IDropdownMenu> = ({
  isOpen,
  setIsOpen,
  activeMenu,
  setActiveMenu,
  setDarkMode,
  children,
}) => {
  const menuRef = useRef(null);
  const nodeRef = useRef<HTMLDivElement>(null);
  const [menuHeight, setMenuHeight] = useState<number>(
    nodeRef.current ? nodeRef.current?.offsetHeight : 54
  );

  const getHeight = () => {
    const height = nodeRef.current?.offsetHeight;
    if (height) setMenuHeight(height);
  };

  const onClickMenuHandler = () => {
    setActiveMenu("main");
    setIsOpen(!isOpen);
  };

  useClickOutside(menuRef, isOpen, onClickMenuHandler);

  return (
    <Container ref={menuRef} style={{ height: menuHeight }}>
      <CSSTransition
        nodeRef={nodeRef}
        in={activeMenu === "main"}
        timeout={10}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={getHeight}
      >
        <MenuDiv ref={nodeRef}>
          <DropdownItem leftIcon={<User />}>My profile</DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            gotoMenu="theme"
            setActiveMenu={setActiveMenu}
          >
            Theme
          </DropdownItem>
        </MenuDiv>
      </CSSTransition>

      <CSSTransition
        nodeRef={nodeRef}
        in={activeMenu === "theme"}
        unmountOnExit
        timeout={10}
        classNames="menu-primary"
        onEnter={getHeight}
      >
        <MenuDiv ref={nodeRef}>
          <DropdownItem
            leftIcon={<ArrowIcon />}
            gotoMenu="main"
            setActiveMenu={setActiveMenu}
          >
            Back
          </DropdownItem>
          <DropdownItem leftIcon={<Sun />}>Light theme</DropdownItem>
          <DropdownItem leftIcon={<Moon />}>Dark theme</DropdownItem>
        </MenuDiv>
      </CSSTransition>
    </Container>
  );
};

export default DropdownMenu;
