import React from "react";
import { FlexWrapper } from "../../components/FlexWrapper";
import { thems } from "../../styles/Thems";
import { Container } from "../../components/Container";
import { S } from "./Footer_Styles";
import { Icon } from "../../components/icon/Icon";
import { Zoom } from "react-awesome-reveal";

const iconsData = [
  {
    iconId: "in",
    height: "18px",
    width: "18px",
    fill: `${thems.colors.footer}`,
  },
  {
    iconId: "githubwhite",
    height: "18px",
    width: "18px",
    fill: `${thems.colors.footer}`,
  },
  {
    iconId: "tg",
    height: "18px",
    width: "18px",
    fill: `${thems.colors.footer}`,
  },
  {
    iconId: "instagram",
    height: "18px",
    width: "18px",
    fill: `${thems.colors.footer}`,
  },
];

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <S.Copyright>2025 All Rights Reserved</S.Copyright>
          <S.SocialList>
            <Zoom cascade={true} damping={0.1}>
              {iconsData.map((i, index) => {
                return (
                  <S.SocialItem>
                    <S.SocialLink>
                      <Icon
                        key={index}
                        iconId={i.iconId}
                        height={i.height}
                        width={i.width}
                        fill={i.fill}
                      />
                    </S.SocialLink>
                  </S.SocialItem>
                );
              })}
            </Zoom>
          </S.SocialList>
        </FlexWrapper>
      </Container>
    </S.Footer>
  );
};
