import styled from "styled-components"
import { Icon } from "../../components/Icon"
import { FlexWrapper } from "../../components/FlexWrapper"

export const Footer = () => {
    return(
        <StyledFooter>
            <FlexWrapper justify="space-around">
                <Container>
                    <Copyright>2024 All Rights Reserved</Copyright>
                </Container>
                <IconsWripper>
                    <a href="#">
                        <Icon iconId='instagram' viewBox="0 0 18 18" height="100%" width="100%" fill=""/>
                    </a>
                    <a href="">
                        <Icon iconId='in' viewBox="0 0 18 18" height="100%" width="100%" fill=""/>
                    </a>
                    <a href="">
                        <Icon iconId='x' viewBox="0 0 512 462.799" height="100%" width="100%" fill=""/>
                    </a>
                    <a href="">
                        <Icon iconId='facebook' viewBox="0 0 18 18" height="100%" width="100%" fill=""/>
                    </a>
                </IconsWripper>
            </FlexWrapper>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    padding: 2vw 0;
`

const IconsWripper = styled.div`
    display: flex;
    width: 7vw;
    gap: 1vw;
`

const Copyright = styled.small`
    min-width:  2vw;
`

const Container = styled.div``