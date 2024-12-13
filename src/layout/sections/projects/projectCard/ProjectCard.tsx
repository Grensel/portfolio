import styled from "styled-components"
import { thems } from "../../../../styles/Thems"
import { FlexWrapper } from "../../../../components/FlexWrapper"
import { Icon } from "../../../../components/Icon"
import { Button } from "../../../../components/Button"

type ProjectpRropsType = {
    projectType: string
    workType: string
    projectTitle: string
    projectDiscription: string
    href: string
}

export const Project = (props: ProjectpRropsType) => {
    return (
        <ProjectCard>
            <FlexWrapper direction={"column"} gap={"18px"}>
                <ProjectTypeName>{props.projectType}</ProjectTypeName>
                <ProjectTitle>
                    <span>{props.workType}_</span><br/>
                    {props.projectTitle}
                </ProjectTitle>
            </FlexWrapper>
            <FlexWrapper direction={"column"} gap={"40px"}>
                <ProjectDiscription>{props.projectDiscription}</ProjectDiscription>
                <Button as="a" href={props.href || "#"} btnType={"project"}>
                    View More
                    <Icon
                        iconId={'btn'}
                        viewBox={"0 0 6 11"}
                        height={"10px"}
                        width={"10px"}
                        fill={`${thems.colors.background.second}`}
                    />
                </Button>
            </FlexWrapper>
        </ProjectCard>
    )
}

const ProjectCard = styled.div`
    display: flex;
    gap: 85px;
    padding: 94px 46px 100px;
    background-color: rgba(231, 231, 231, 0.8);
    @media ${thems.media.tablet} {
        flex-direction: column;
    }
`

const ProjectTypeName = styled.h3`
    font-family: "Epilogue";
    font-size: 16px;
    font-weight: 600;

`

const ProjectTitle = styled.h4`
    max-width: 430px;
    font-family: "Epilogue";
    font-weight: 800;
    font-size: 45px;
    span {
        font-weight: 200;
    }
`

const ProjectDiscription = styled.p`
    max-width: 433px;
    margin-top: 38px;
    font-family: "Epilogue";
    font-size: 18px;
    line-height: 27px;
    font-weight: 400;
`