import styled, { css } from "styled-components";
import { thems } from "../styles/Thems";
import { Link } from "react-scroll";

type LinkPropsType = {
  linkType: "primary" | "menu" | "project";
  to: string;
  smooth?: boolean;
};

export const MyLink = styled(Link).attrs((props: LinkPropsType) => ({
  to: props.to || "#",
  smooth: props.smooth || true,
}))<LinkPropsType>`
  ${(props) =>
    props.linkType === "primary" &&
    css<LinkPropsType>`
      padding: 8px 20px;
      background-color: ${thems.colors.background.button};
      color: ${thems.colors.text.second};
      transition: 500ms;

      &:hover,
      &.active {
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
        transition: transform 500ms;
      }

      &:hover,
      &.active {
        cursor: pointer;
        &::before {
          transform: scaleX(1);
          transition: transform 500ms;
        }
      }
    `}

    ${(props) =>
    props.linkType === "project" &&
    css<LinkPropsType>`
      position: relative;
      padding: 10px 0;
      align-self: flex-start;
      color: ${thems.colors.text.second};
      transition: 500ms;

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
        transition: transform 500ms;
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
