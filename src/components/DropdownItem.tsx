import React from "react";
import styled from "styled-components";

const Item = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  text-decoration: none;
  fill: ${(porps) => porps.theme.textColor};
  color: ${(props) => props.theme.textColor};
  margin: 4px 0px;
`;
const MenuDesc = styled.div`
  display: flex;
  flex-direction: center;
  align-items: center;
`;
const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgAccent};
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;
const LeftIcon = styled.span`
  width: 18px;
  height: 18px;
`;
const TextWrapper = styled.div`
  margin-left: 10px;
`;
const RightIcon = styled.span`
  position: relative;
  bottom: 4px;
  width: 8px;
  height: 8px;
`;

interface Props {
  leftIcon?: any;
  rightIcon?: any;
}

const DropdownItem: React.FC<Props> = ({ leftIcon, rightIcon, children }) => {
  return (
    <Item href="">
      <MenuDesc>
        <IconWrapper>
          <LeftIcon>{leftIcon}</LeftIcon>
        </IconWrapper>
        <TextWrapper>{children}</TextWrapper>
      </MenuDesc>
      <RightIcon>{rightIcon}</RightIcon>
    </Item>
  );
};

export default DropdownItem;
