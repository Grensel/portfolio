import styled from "styled-components";
import { Logo } from "../../components/Logo";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { FlexWrapper } from "../../components/FlexWrapper";
import { thems } from "../../styles/Thems";
import { Container } from "../../components/Container";

const items = ["Skills", "Projects", "About"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify="space-between" margin="0 auto">
                    <Logo />
                    <HeaderMenu menuItems={items} />
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background: ${thems.colors.background.header};
    padding: 14px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
`