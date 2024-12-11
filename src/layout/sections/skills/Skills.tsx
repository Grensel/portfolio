import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { SkillCard } from "./skillCard/SkillCard"
import { Thems } from "../../../styles/Thems"

export const Skills = () => {
    return (
        <StyledSkills>
            <FlexWrapper wrap={"wrap"}>
                <SkillCard
                    skillTitle={"React"}
                    skillNumber={"01"}
                    iconId={"react"}
                    fill={`${Thems.colors.primary}`}
                    description={"consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"}
                />
                <SkillCard
                    skillNumber={"02"}
                    iconId={"js"}
                    fill={`${Thems.colors.primary}`}
                    skillTitle={"JavaScript"}
                    description={"consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"}
                />
                <SkillCard
                    skillNumber={"03"}
                    iconId={"ts"}
                    fill={`${Thems.colors.primary}`}
                    skillTitle={"TypeScript"}
                    description={"consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"}
                />
                <SkillCard
                    skillNumber={"04"}
                    iconId={"html"}
                    fill={`${Thems.colors.primary}`}
                    skillTitle={"HTML"}
                    description={"consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"}
                />
                <SkillCard
                    skillNumber={"05"}
                    iconId={"githubblack"}
                    fill={`${Thems.colors.primary}`}
                    skillTitle={"GitHub"}
                    description={"consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"}
                />
                <SkillCard
                    skillNumber={"06"}
                    iconId={"scv"}
                    fill={`${Thems.colors.primary}`}
                    skillTitle={"Styled Components"}
                    description={"consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"}
                />
            </FlexWrapper>
        </StyledSkills>
    )
}

const StyledSkills = styled.section`
    padding: 7.7vw 2vw;
    ${FlexWrapper} {
        gap: 1vw;
    }
`