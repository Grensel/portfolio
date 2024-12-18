import styled from "styled-components";
import { thems } from "../../../styles/Thems";
import { Link } from "../../../components/Link";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMeny>
      <MenuNav>
        <MenuList>
          {props.menuItems.map((item: string, index: number) => {
            return (
              <MenuItem key={index}>
                <Link href="#" linkType="outline">
                  {item}
                </Link>
              </MenuItem>
            );
          })}
        </MenuList>
      </MenuNav>
      <Link href="#" linkType="primary">
        Let&apos;s Talk
      </Link>
      <BurgerMenu />
    </StyledMeny>
  );
};

const StyledMeny = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const MenuNav = styled.nav`
  @media ${thems.media.mobile} {
    display: none;
  }
`;

const MenuList = styled.ul`
  display: flex;
  gap: 12px;
`;

const MenuItem = styled.li``;

const BurgerMenu = styled.div`
  display: none;
  cursor: pointer;
  width: 10vw;
  height: 2px;
  background-color: ${thems.colors.text.title};

  @media ${thems.media.mobile} {
    display: block;
  }
`;
