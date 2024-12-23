import React from "react";
import { Logo } from "../../components/Logo";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { S } from "./Header_Styles";
import { MobileMenu } from "./headerMenu/burgerMenu/BurgerMenu";
import { DesktopMenu } from "./headerMenu/desktopMenu/DesktopMenu";

const items = ["Skills", "Projects", "About"];

export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <S.Header>
      <Container>
        <FlexWrapper justify={"space-between"} margin={"0 auto"}>
          <Logo />
          {width < breakpoint ? (
            <MobileMenu menuItems={items} />
          ) : (
            <DesktopMenu menuItems={items} />
          )}
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
