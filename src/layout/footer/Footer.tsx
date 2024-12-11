import styled from "styled-components"
import { Icon } from "../../components/Icon"
import { FlexWrapper } from "../../components/FlexWrapper"

export const Footer = () => {
    return(
        <StyledFooter>
            <FlexWrapper justify="space-around">
                <Container>
                    <Copyright>2025 All Rights Reserved</Copyright>
                </Container>
                <IconsWripper>
                    <a href="#">
                        <Icon 
                            iconId='in'
                            height="100%"
                            width="100%"
                            />
                    </a>
                    <a href="#">
                        <Icon 
                            iconId='githubwhite'
                            height="100%"
                            width="100%"
                            fill="`${Thems.color.second}`"
                            />
                    </a>
                    <a href="#">
                        <Icon 
                            iconId='tg'
                            height="100%"
                            width="100%"
                            fill="`${Thems.color.second}`"
                            />
                    </a>
                    <a href="#">
                        <Icon 
                            iconId='instagram' 
                            height="100%" 
                            width="100%" 
                            />
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