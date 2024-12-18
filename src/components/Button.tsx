import styled, { css } from "styled-components";
import { thems } from "../styles/Thems";

type LinkButtonPropsType = {
  btnType?: "contact" | "project";
};

export const Button = styled.button<LinkButtonPropsType>`
  ${(props) =>
    props.btnType === "contact" &&
    css<LinkButtonPropsType>`
      padding: 10px 10px;
      color: ${thems.colors.text.title};

      &:hover {
        cursor: pointer;
        box-shadow: inset 4px 4px 6px -5px rgba(0, 0, 0, 0.3),
          inset -4px -4px 6px -5px rgba(255, 255, 255, 0.8),
          -0.5px -0.5px 5px rgba(255, 255, 255, 1),
          0.5px 0.5px 5px rgba(0, 0, 0, 0.25),
          0px 12px 10px -15px rgba(0, 0, 0, 0.15);
        transition: 500ms;
      }

      &:active {
        cursor: pointer;
        box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
          inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7),
          -0.5px -0.5px 0px rgba(255, 255, 255, 1),
          0.5px 0.5px 0px rgba(0, 0, 0, 0.15),
          0px 12px 10px -10px rgba(0, 0, 0, 0.05);
        transition: 500ms;
      }
    `}
`;
