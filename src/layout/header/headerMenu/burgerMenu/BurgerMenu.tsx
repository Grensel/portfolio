import React, { useState } from "react";
import { MyLink } from "../../../../components/Link";
import { Menu } from "../menu/Menu";
import { S } from "../menu/Menu";

export const MobileMenu: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const onBurgerBtnClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  return (
    <S.BurgerMenu>
      <MyLink to={"contact"} smooth={true} linkType={"primary"}>
        Let&apos;s Talk
      </MyLink>
      <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
        <span></span>
      </S.BurgerButton>
      <S.MenuPopup
        isOpen={menuIsOpen}
        onClick={() => {
          setMenuIsOpen(false);
        }}
      >
        <Menu onClick={() => {
          setMenuIsOpen(false);
        }} />
        <MyLink
          activeClass={"active"}
          spy={true}
          to={"contact"}
          smooth={true}
          linkType={"primary"}
          onClick={() => {
            setMenuIsOpen(false);
          }}
        >
          Let&apos;s Talk
        </MyLink>
      </S.MenuPopup>
    </S.BurgerMenu>
  );
};
