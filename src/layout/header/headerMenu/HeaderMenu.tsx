import styled from "styled-components";
import { thems } from "../../../styles/Thems";
import { Link } from "../../../components/Link";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledHeaderMeny>
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
    </StyledHeaderMeny>
  );
};

const StyledHeaderMeny = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;

  @media ${thems.media.tablet} {
    display: none;
  }
`;

const MenuList = styled.ul`
  display: flex;
  gap: 12px;
`;

const MenuItem = styled.li``;
