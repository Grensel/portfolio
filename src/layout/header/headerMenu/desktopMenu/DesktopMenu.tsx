import React from "react";
import { Link } from "../../../../components/Link";
import { Menu } from "../menu/Menu";
import { S } from "../menu/Menu";

export const DesktopMenu: React.FC<{ menuItems: Array<string> }> = (props: {
  menuItems: Array<string>;
}) => {
  return (
    <S.DesktopMenu>
      <Menu menuItems={props.menuItems} />
      <Link href="#" linkType="primary">
        Let&apos;s Talk
      </Link>
    </S.DesktopMenu>
  );
};
