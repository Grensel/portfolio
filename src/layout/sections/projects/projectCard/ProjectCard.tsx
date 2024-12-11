import styled from "styled-components"
import { Thems } from "../../../../styles/Thems"
import { FlexWrapper } from "../../../../components/FlexWrapper"
import { Icon } from "../../../../components/Icon"
import { Button } from "../../../../components/Button"

type ProjectpRropsType = {
    projectType: string
    projectTitle: string
    projectDiscription: string
    href: string
}

export const Project = (props: ProjectpRropsType) => {
    return (
        <ProjectCard >
            <FlexWrapper direction="column">
                <ProjectTypeName>{props.projectType}</ProjectTypeName>
                <ProjectTitle>
                    <span>A Case Study_</span><br/>
                    {props.projectTitle}
                </ProjectTitle>
            </FlexWrapper>
            <FlexWrapper direction="column">
                            <ProjectDiscription>{props.projectDiscription}</ProjectDiscription>
                            <Button as="a" href={props.href || "#"}>
                                View More
                                <Icon
                                    iconId='btn'
                                    viewBox="0 0 6 11"
                                    height="10%"
                                    width="10%"
                                    fill={`${Thems.colors.second}`}
                                />
                            </Button>
                        </FlexWrapper>
        </ProjectCard>
    )
}

const ProjectCard = styled.div`
    display: flex;
    padding: 1vw;
    gap: 1vw;
    background-color: #b6b4b452;

    @media ${Thems.media.tablet} {
        flex-direction: column;
    }
`

const ProjectTypeName = styled.h5``

const ProjectTitle = styled.h2`
    font-size: 45px;
    line-height: 54px;
    span {
        font-weight: 200;
    }
`

const ProjectDiscription = styled.p`
    font-family: "Epilogue";
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
`