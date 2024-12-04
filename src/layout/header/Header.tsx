import styled from "styled-components";
import { Logo } from "../../components/Logo";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Header = () => {
    return (
        <StyledHeader>
            <FlexWrapper justify="space-around">
                <Logo />
                <HeaderMenu />
            </FlexWrapper>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    margin-bottom: -53px;
    background-color: transparent;
`