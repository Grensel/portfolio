import styled, { css } from "styled-components";
import { thems } from "../../../styles/Thems";
import { Link } from "../../../components/Link";

export const BurgerMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledBurgerMenu>
      <BurgerButton isOpen={false}>
        <span></span>
      </BurgerButton>
      <MenuPopup isOpen={false}>
        <MenuList>
          {props.menuItems.map((item: string, index: number) => {
            return (
              <MenuItem key={index}>
                <Link href="#" linkType="menu">
                  {item}
                </Link>
              </MenuItem>
            );
          })}
        </MenuList>
        <Link href="#" linkType="primary">
          Let&apos;s Talk
        </Link>
      </MenuPopup>
    </StyledBurgerMenu>
  );
};

const StyledBurgerMenu = styled.nav`
  display: none;
  @media ${thems.media.tablet} {
    display: block;
  }
`;

const BurgerButton = styled.div<{ isOpen: boolean }>`
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
    left: 45px;
    bottom: 68px;

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
      gap: 20px;
    `}
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const MenuItem = styled.li``;
