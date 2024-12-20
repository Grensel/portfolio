import styled, { css } from "styled-components";
import { thems } from "../styles/Thems";

type TitleComponentType = {
  color?: "second";
};
export const Title = styled.h2<TitleComponentType>`
  color: ${thems.colors.text.title};
  margin-bottom: 70px;

  ${(props) =>
    props.color === "second" &&
    css<TitleComponentType>`
      color: ${thems.colors.text.additional};
    `}
`;
