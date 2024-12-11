import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Title } from "../../../components/Title"
import { Project } from "./projectCard/ProjectCard"

export const Projects = () => {
    return (
        <StyledProject>
            <FlexWrapper direction="column">
                <Title>My <br/>Projects</Title>
                <CardsContaioner>
                    <Project
                        projectType={"Mental Health"}
                        projectTitle={"Find Peace in Meditation"}
                        projectDiscription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."}
                        href={'#'}
                    />
                    <Project
                        projectType={"Mental Health"}
                        projectTitle={"Find Peace in Meditation"}
                        projectDiscription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."}
                        href={'#'}
                    />
                    <Project
                        projectType={"Mental Health"}
                        projectTitle={"Find Peace in Meditation"}
                        projectDiscription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."}
                        href={'#'}
                    />
                </CardsContaioner>
            </FlexWrapper>
        </StyledProject>
    )
}

const StyledProject = styled.section`
    padding: 10vw 0;
    ${FlexWrapper} { 
        gap: 3vw;
        padding: 0 5vw;
    }
`
const CardsContaioner = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: 2vw;
`