import styled from "styled-components";
import { Logo } from "../../components/Logo";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Thems } from "../../styles/Thems";

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
    margin-bottom: -94px;
    background-color: transparent;
    ${FlexWrapper} {
        padding: 15px 2vw;
        max-width: 1100px;
        @media ${Thems.media.mobile} {
            padding: 17px 2vw;
        }
    };

`