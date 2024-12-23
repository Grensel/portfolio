import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Link } from "../../../../components/Link";
import { S } from "../Projects_Styled";

type ProjectpRropsType = {
  projectType?: string;
  workType?: string;
  projectTitle?: string;
  projectDiscription?: string;
  href?: string;
  urlImg?: string;
};

export const Project: React.FC<ProjectpRropsType> = (
  props: ProjectpRropsType
) => {
  return (
    <S.ProjectCard urlImg={props.urlImg}>
      <FlexWrapper direction={"column"} gap={18}>
        <S.ProjectTypeName>{props.projectType}</S.ProjectTypeName>
        <S.ProjectTitle>
          <S.Bigspan>{props.workType}_</S.Bigspan>
          <br />
          {props.projectTitle}
        </S.ProjectTitle>
      </FlexWrapper>
      <FlexWrapper direction={"column"} gap={40}>
        <S.ProjectDiscription>{props.projectDiscription}</S.ProjectDiscription>
        <Link linkType={"project"} href={props.href}>
          View More
        </Link>
      </FlexWrapper>
    </S.ProjectCard>
  );
};
