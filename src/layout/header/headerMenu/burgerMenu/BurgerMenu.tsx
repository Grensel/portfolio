import React from "react";
import { Link } from "../../../../components/Link";
import { Menu } from "../menu/Menu";
import { S } from "../menu/Menu";

export const MobileMenu: React.FC<{ menuItems: Array<string> }> = (props: {
  menuItems: Array<string>;
}) => {
  return (
    <S.BurgerMenu>
      <Link href="#" linkType="primary">
        Let&apos;s Talk
      </Link>
      <S.BurgerButton isOpen={false}>
        <span></span>
      </S.BurgerButton>
      <S.MenuPopup isOpen={false}>
        <Menu menuItems={props.menuItems} />
      </S.MenuPopup>
    </S.BurgerMenu>
  );
};
