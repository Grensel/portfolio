import styled from "styled-components";
import { thems } from "../../styles/Thems";

const Header = styled.header`
  background: ${thems.colors.background.header};
  padding: 14px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  @media ${thems.media.tablet} {
    padding: 0;
  }
`;

export const S = {
  Header,
};
