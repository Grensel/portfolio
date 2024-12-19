import styled from "styled-components";
import { thems } from "../../../../styles/Thems";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Icon } from "../../../../components/Icon";
import { Link } from "../../../../components/Link";

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
      <FlexWrapper direction={"column"} gap={"18px"}>
        <ProjectTypeName>{props.projectType}</ProjectTypeName>
        <ProjectTitle>
          <span>{props.workType}_</span>
          <br />
          {props.projectTitle}
        </ProjectTitle>
      </FlexWrapper>
      <FlexWrapper direction={"column"} gap={"40px"}>
        <ProjectDiscription>{props.projectDiscription}</ProjectDiscription>
        <Link linkType={"project"}>
          View More
          <Icon
            iconId={"btn"}
            viewBox={"0 0 6 11"}
            height={"10px"}
            width={"10px"}
            fill={`${thems.colors.text.second}`}
          />
        </Link>
      </FlexWrapper>
    </ProjectCard>
  );
};

const ProjectCard = styled.div<ProjectpRropsType>`
  display: flex;
  gap: 85px;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)),
    url(${(props) => props.urlImg}) no-repeat;
  background-size: cover;
  padding: 94px 46px 100px;
  @media ${thems.media.tablet} {
    flex-direction: column;
  }
`;

const ProjectTypeName = styled.h3`
  font-family: "Epilogue", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: ${thems.colors.text.second};
`;

const ProjectTitle = styled.h4`
  max-width: 430px;
  font-family: "Epilogue", sans-serif;
  font-weight: 800;
  font-size: 45px;
  color: ${thems.colors.text.second};

  span {
    font-weight: 200;
  }
`;

const ProjectDiscription = styled.p`
  max-width: 433px;
  margin-top: 38px;
  font-family: "Epilogue", sans-serif;
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
  color: ${thems.colors.text.second};
`;
