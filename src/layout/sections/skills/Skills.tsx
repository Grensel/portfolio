import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Title } from "../../../components/Title"

export const Skills = () => {
    return (
        <StyledSkills>
            <FlexWrapper direction="column">
                <Title>My Skills</Title>
                <FlexWrapper>4214</FlexWrapper>
            </FlexWrapper>
        </StyledSkills>
    )
}

const StyledSkills = styled.section`
`