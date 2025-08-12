import React from "react";
import styled, { css } from "styled-components";
import { MyLink } from "../../../../components/Link";
import { thems } from "../../../../styles/Thems";

const MenuData = [
  {
    title: "Skills",
    to: "skills",
  },
  {
    title: "Projects",
    to: "projects",
  },
  {
    title: "About",
    to: "about",
  },
];

type MenuPropsType = {
  onClick?: () => void
}

export const Menu: React.FC<MenuPropsType> = ({ onClick }) => {
  return (
    <MenuList>
      {MenuData.map((m, index) => {
        return (
          <MenuItem key={index}>
            <MyLink
              activeClass={"active"}
              spy={true}
              to={m.to}
              linkType={"menu"}
              onClick={onClick}
            >
              {m.title}
            </MyLink>
          </MenuItem>
        );
      })}
    </MenuList>
  );
};

// Desktop Menu

const DesktopMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const MenuList = styled.ul`
  display: flex;
  gap: 12px;
  @media ${thems.media.tablet} {
    flex-direction: column;
    gap: 50px;
  }
`;

const MenuItem = styled.li``;

// Mobile Menu

const BurgerMenu = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 45px;
  padding: 25px;
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 102;

  span {
    display: block;
    height: 2px;
    width: 36px;
    background-color: ${thems.colors.background.button};

    position: absolute;
    left: 35px;
    bottom: 60px;

    ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
        background-color: rgba(45, 44, 44, 0);
      `}

    &::before {
      content: "";
      display: block;
      height: 2px;
      width: 36px;
      background-color: ${thems.colors.background.button};
      position: absolute;
      transform: translateY(-10px);

      ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(0px);
        `}
    }
    &::after {
      content: "";
      display: block;
      height: 2px;
      width: 36px;
      background-color: ${thems.colors.background.button};
      position: absolute;
      transform: translateY(10px);

      ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0px);
        `}
    }
  }
`;

const MenuPopup = styled.div<{ isOpen: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 101;
  background-color: ${thems.colors.background.header};

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 30px;
      gap: 40px;
    `}
`;

export const S = {
  DesktopMenu,
  BurgerMenu,
  BurgerButton,
  MenuPopup,
};
