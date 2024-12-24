import React from "react";
import { MyLink } from "../../../../components/Link";
import { Menu } from "../menu/Menu";
import { S } from "../menu/Menu";

export const DesktopMenu: React.FC = () => {
  return (
    <S.DesktopMenu>
      <Menu />
      <MyLink
        activeClass={"active"}
        spy={true}
        to={"contact"}
        smooth={true}
        linkType={"primary"}
      >
        Let&apos;s Talk
      </MyLink>
    </S.DesktopMenu>
  );
};
