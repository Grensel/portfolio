import styled from "styled-components";
import { Logo } from "../../components/Logo";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Header = () => {
    return (
        <StyledHeader>
            <FlexWrapper justify="space-between">
                <Logo />
                <HeaderMenu />
            </FlexWrapper>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    margin-bottom: -90px;
    background-color: transparent;
    
    ${FlexWrapper}{
        padding: 13px 201px;
}
`