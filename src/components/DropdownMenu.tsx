import React from "react";
import styled from "styled-components";
import DropdownItem from "./DropdownItem";
import { ReactComponent as CogIcon } from "../components/icons/cog.svg";
import { ReactComponent as ChevronIcon } from "../components/icons/chevron.svg";

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
`;

const DropdownMenu: React.FC = () => {
  return (
    <Container>
      <DropdownItem>My profile</DropdownItem>
      <DropdownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />}>
        Theme
      </DropdownItem>
    </Container>
  );
};

export default DropdownMenu;
