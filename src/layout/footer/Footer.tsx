import styled from "styled-components"
import { Icon } from "../../components/Icon"
import { FlexWrapper } from "../../components/FlexWrapper"
import { thems } from "../../styles/Thems"

export const Footer = () => {
    return(
        <StyledFooter>
            <FlexWrapper justify="space-around">
                <Copyright>2025 All Rights Reserved</Copyright>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon 
                                iconId='in'
                                height="50px"
                                width="50px"
                                fill="`${thems.color.footerIcons}`"
                                />
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon 
                                iconId='githubwhite'
                                height="50px"
                                width="50px"
                                fill="`${thems.color.footerIcons}`"
                                />
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon 
                                iconId='tg'
                                height="50px"
                                width="50px"
                                fill="`${thems.color.footerIcons}`"
                                />
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon 
                                iconId='instagram' 
                                height="50xp" 
                                width="50px"
                                fill="`${thems.color.footerIcons}`"
                                />
                        </SocialLink>
                    </SocialItem>
                </SocialList>
            </FlexWrapper>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    padding: 2vw 0;
    background-color: ${thems.colors.background.primary};
`

const Copyright = styled.small`
`

const SocialList = styled.ul`
display: flex;
`

const SocialItem = styled.li``

const SocialLink = styled.a`
`