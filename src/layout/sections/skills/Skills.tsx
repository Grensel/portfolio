import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Icon } from "../../../components/Icon"
import { Thems } from "../../../styles/Thems"

export const Skills = () => {
    return (
        <StyledSkills>
            <FlexWrapper wrap="wrap">
                <SkillCard>
                    <FlexWrapper direction="column">
                        <SkillNumber>01.</SkillNumber>
                        <Icon iconId='react' viewBox="0 -1 34 34" height="50%" width="50%" fill="none"/>
                    </FlexWrapper>
                    <FlexWrapper direction="column">
                        <SkillTitle>React</SkillTitle>
                        <SkillDescription>consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue</SkillDescription>
                    </FlexWrapper>
                </SkillCard>
                <SkillCard>
                    <FlexWrapper direction="column">
                        <SkillNumber>02.</SkillNumber>
                        <Icon iconId='js' viewBox="0 0 512 512" height="50%" width="50%" fill="none"/>
                    </FlexWrapper>
                    <FlexWrapper direction="column">
                        <SkillTitle>JavaScript</SkillTitle>
                        <SkillDescription>consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue</SkillDescription>
                    </FlexWrapper>
                </SkillCard>
                <SkillCard>
                    <FlexWrapper direction="column">
                        <SkillNumber>03.</SkillNumber>
                        <Icon iconId='ts' viewBox="5 5 15 15" height="50%" width="50%" fill="none"/>
                    </FlexWrapper>
                    <FlexWrapper direction="column">
                        <SkillTitle>TypeScript</SkillTitle>
                        <SkillDescription>consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue</SkillDescription>
                    </FlexWrapper>
                </SkillCard>
                <SkillCard>
                    <FlexWrapper direction="column">
                        <SkillNumber>04.</SkillNumber>
                        <Icon iconId='html' viewBox="0 0 512 512" height="50%" width="50%" fill="none"/>
                    </FlexWrapper>
                    <FlexWrapper direction="column">
                        <SkillTitle>HTML</SkillTitle>
                        <SkillDescription>consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue</SkillDescription>
                    </FlexWrapper>
                </SkillCard>
                <SkillCard>
                    <FlexWrapper direction="column">
                        <SkillNumber>05.</SkillNumber>
                        <Icon iconId='github' viewBox="0 0 48 48" height="50px" width="50px" fill="none"/>
                    </FlexWrapper>
                    <FlexWrapper direction="column">
                        <SkillTitle>GitHub</SkillTitle>
                        <SkillDescription>consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue</SkillDescription>
                    </FlexWrapper>
                </SkillCard>
                <SkillCard>
                    <FlexWrapper direction="column">
                        <SkillNumber>06.</SkillNumber>
                        <Icon iconId='scv' viewBox="0 2 24 24" height="50%" width="50%" fill="none"/>
                    </FlexWrapper>
                    <FlexWrapper direction="column">
                        <SkillTitle>Styled Components</SkillTitle>
                        <SkillDescription>consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue</SkillDescription>
                    </FlexWrapper>
                </SkillCard>
            </FlexWrapper>
        </StyledSkills>
    )
}

const StyledSkills = styled.section`
    padding: 2vw;
    ${FlexWrapper}{
        gap: 1vw;
    }
`

const SkillCard = styled.div`
    display: flex;
    max-width: 440px;
    min-width: 300px;
    max-height: 146;
    min-height: 115px;
    ${FlexWrapper} {
        min-width: 25%;
    }
`

const SkillNumber = styled.h3`
    color: ${Thems.colors.primary};
`

const SkillTitle = styled.h4`
    color: ${Thems.colors.primary};
`

const SkillDescription = styled.p`
    color: ${Thems.colors.primary};
`