import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Button } from "../../../components/Button"
import { Icon } from "../../../components/Icon"
import { Title } from "../../../components/Title"
import { Thems } from "../../../styles/Thems"


export const Projects = () => {
    return (
        <StyledProject>
            <FlexWrapper direction="column">
                <Title>My <br/>Projects</Title>
                <CardsContaioner>
                    <ProjectCard>
                        <FlexWrapper direction="column">
                            <CardName>Mental Health</CardName>
                            <CardTitle>
                                <span>A Case Study_</span>
                                Find Peace in Meditation
                            </CardTitle>
                        </FlexWrapper>
                        <FlexWrapper direction="column">
                            <CardDiscription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</CardDiscription>
                            <Button>
                                <a href="#">View More</a>
                                <Icon iconId='btn' viewBox="0 0 6 11" height="5%" width="5%" fill="black"/>
                            </Button>
                        </FlexWrapper>
                    </ProjectCard>
                    <ProjectCard>
                        <FlexWrapper direction="column">
                            <CardName>Mental Health</CardName>
                            <CardTitle>
                                <span>A Case Study_</span>
                                Find Peace in Meditation
                            </CardTitle>
                        </FlexWrapper>
                        <FlexWrapper direction="column">
                            <CardDiscription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</CardDiscription>
                            <Button>
                                <a href="#">View More</a>
                                <Icon iconId='btn' viewBox="0 0 6 11" height="5%" width="5%" fill="black"/>
                            </Button>
                        </FlexWrapper>
                    </ProjectCard>
                    <ProjectCard>
                        <FlexWrapper direction="column">
                            <CardName>Mental Health</CardName>
                            <CardTitle>
                                <span>A Case Study_</span>
                                Find Peace in Meditation
                            </CardTitle>
                        </FlexWrapper>
                        <FlexWrapper direction="column">
                            <CardDiscription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</CardDiscription>
                            <Button>
                                <a href="#">View More</a>
                                <Icon iconId='btn' viewBox="0 0 6 11" height="5%" width="5%" fill="black"/>
                            </Button>
                        </FlexWrapper>
                    </ProjectCard>
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

const ProjectCard = styled.div`
    display: flex;
    padding: 1vw;
    gap: 1vw;
    background-color: red;

    @media ${Thems.media.tablet} {
        flex-direction: column;
    }
`

const CardName = styled.h5``

const CardTitle = styled.h2`
    font-size: 45px;
    line-height: 54px;
    span {
        font-weight: 200;
    }
`

const CardDiscription = styled.p`
    font-family: "Epilogue";
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
`