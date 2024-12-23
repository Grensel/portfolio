import styled from "styled-components";
import { Icon } from "../../components/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { thems } from "../../styles/Thems";
import { Container } from "../../components/Container";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Copyright>2025 All Rights Reserved</Copyright>
          <SocialList>
            <SocialItem>
              <SocialLink>
                <Icon
                  iconId="in"
                  height="18px"
                  width="18px"
                  fill={`${thems.colors.footer}`}
                />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink>
                <Icon
                  iconId="githubwhite"
                  height="18px"
                  width="18px"
                  fill={`${thems.colors.footer}`}
                />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink>
                <Icon
                  iconId="tg"
                  height="18px"
                  width="18px"
                  fill={`${thems.colors.footer}`}
                />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink>
                <Icon
                  iconId="instagram"
                  height="18px"
                  width="18px"
                  fill={`${thems.colors.footer}`}
                />
              </SocialLink>
            </SocialItem>
          </SocialList>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
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
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 400;
`;

const SocialList = styled.ul`
  display: flex;
  gap: 22px;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a`
  position: relative;
  &:hover {
    bottom: 4px;
  }
`;
