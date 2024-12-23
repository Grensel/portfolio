import styled from "styled-components";
import { thems } from "../../../../styles/Thems";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Link } from "../../../../components/Link";
import { font } from "../../../../styles/Common";

type ProjectpRropsType = {
  projectType?: string;
  workType?: string;
  projectTitle?: string;
  projectDiscription?: string;
  href?: string;
  urlImg?: string;
};

export const Project = (props: ProjectpRropsType) => {
  return (
    <ProjectCard urlImg={props.urlImg}>
      <FlexWrapper direction={"column"} gap={18}>
        <ProjectTypeName>{props.projectType}</ProjectTypeName>
        <ProjectTitle>
          <Bigspan>{props.workType}_</Bigspan>
          <br />
          {props.projectTitle}
        </ProjectTitle>
      </FlexWrapper>
      <FlexWrapper direction={"column"} gap={40}>
        <ProjectDiscription>{props.projectDiscription}</ProjectDiscription>
        <Link linkType={"project"}>View More</Link>
      </FlexWrapper>
    </ProjectCard>
  );
};

const ProjectCard = styled.div<ProjectpRropsType>`
  display: flex;
  gap: 85px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)),
    url(${(props) => props.urlImg || null}) no-repeat;
  background-size: cover;
  padding: 94px 46px 100px;
  @media ${thems.media.tablet} {
    flex-direction: column;
    gap: 24px;
    padding: 66px 15px 80px;
  }
`;

const ProjectTypeName = styled.h3`
  ${font({ weight: 600, color: thems.colors.text.second, Fmin: 15, Fmax: 16 })}
`;

const ProjectTitle = styled.h4`
  max-width: 430px;
  ${font({
    weight: 800,
    color: thems.colors.text.second,
    Fmin: 43,
    Fmax: 45,
  })}
`;
const Bigspan = styled.span`
  ${font({
    weight: 200,
    color: thems.colors.text.second,
    Fmin: 43,
    Fmax: 45,
  })}
`;

const ProjectDiscription = styled.p`
  max-width: 433px;
  margin-top: 38px;

  @media ${thems.media.tablet} {
    margin-top: 0;
    max-width: 600px;
  }

  ${font({
    weight: 400,
    color: thems.colors.text.second,
    Fmin: 17,
    Fmax: 18,
    lineHeight: "25px",
  })}
`;
