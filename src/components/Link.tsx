import styled, { css } from "styled-components";
import { thems } from "../styles/Thems";

type LinkPropsType = {
  linkType: "primary" | "menu" | "project";
  href?: string;
};

export const Link = styled.a.attrs((href) => ({
  href: href || "#",
}))<LinkPropsType>`
  ${(props) =>
    props.linkType === "primary" &&
    css<LinkPropsType>`
      padding: 8px 20px;
      background-color: ${thems.colors.background.button};
      color: ${thems.colors.text.second};

      &:hover {
        cursor: pointer;
        background-color: ${thems.colors.background.buttonhover};
        transition: 500ms;
      }

      &:active {
        color: ${thems.colors.text.title};
        transition: 500ms;
      }
    `}

  ${(props) =>
    props.linkType === "menu" &&
    css<LinkPropsType>`
      position: relative;
      padding: 10px;
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
    `}

    ${(props) =>
    props.linkType === "project" &&
    css<LinkPropsType>`
      position: relative;
      padding: 10px 0;
      align-self: flex-start;
      color: ${thems.colors.text.second};

      &::before {
        content: "";
        display: inline-block;
        height: 1px;
        width: 100%;
        background-color: ${thems.colors.text.second};

        position: absolute;
        bottom: 0;
        left: 0;
        transform: scaleX(0);
      }

      &::after {
        content: ">";
        color: ${thems.colors.text.second};

        position: absolute;
        right: -16px;
      }

      &:hover {
        cursor: pointer;
        padding: 10px;
        &::before {
          transform: scaleX(1);
          transition: transform 500ms;
        }
        transition: 500ms;
      }
    `}
`;
