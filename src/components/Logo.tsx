import styled from "styled-components";
import { thems } from "../styles/Thems";

export const Logo = () => {
  return <StyledLogo>'So3'</StyledLogo>;
};

const StyledLogo = styled.a`
  position: relative;
  padding: 30px 10px;
  align-self: center;
  font-family: "Big Shoulders Display", sans-serif;
  font-weight: 500;
  font-size: 2.5rem;
  line-height: 0;
  color: ${thems.colors.text.title};

  &::before {
    content: "";
    display: inline-block;
    height: 1px;
    width: 100%;
    background-color: ${thems.colors.text.title};

    position: absolute;
    bottom: 0;
    left: 0;
    transform: scaleX(0);
  }

  &:hover {
    cursor: pointer;
    &::before {
      transform: scaleX(1);
      transition: transform 500ms;
    }
    transition: 500ms;
  }

  &:active {
    color: ${thems.colors.text.additional};
    transition: 500ms;
  }
`;
