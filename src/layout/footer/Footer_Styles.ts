import styled from "styled-components";
import { thems } from "../../styles/Thems";
import { font } from "../../styles/Common";

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;
  background-color: ${thems.colors.background.primary};

  &::before {
    position: relative;
    bottom: 60px;
    content: "";
    display: inline-block;
    height: 1px;
    width: 90%;
    max-width: 1280px;
    background-color: ${thems.colors.footer};
  }
`;

const Copyright = styled.small`
  ${font({
    family: "Roboto",
    weight: 400,
    color: thems.colors.footer,
  })}
  font-size: 14px;
`;

const SocialList = styled.ul`
  display: flex;
  gap: 22px;
`;

const SocialItem = styled.li`
  transform: rotate(-360deg);
  transition: 700ms;
  &:hover {
    transform: rotate(360deg);
    transition: 700ms;
  }
`;

const SocialLink = styled.a``;

export const S = {
  Footer,
  Copyright,
  SocialList,
  SocialItem,
  SocialLink,
};
