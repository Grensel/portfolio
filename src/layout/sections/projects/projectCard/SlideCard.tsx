import { FlexWrapper } from "../../../../components/FlexWrapper";
import { MyLink } from "../../../../components/Link";
import { S } from "../Projects_Styled";

type SlyderRropsType = {
  projectType?: string;
  workType?: string;
  projectTitle?: string;
  projectDiscription?: string;
  href?: string;
  urlImg?: string;
};

export const SlideCard: React.FC<SlyderRropsType> = (
  props: SlyderRropsType
) => {
  return (
    <S.SlideCard urlImg={props.urlImg}>
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
        <MyLink linkType={"project"} href={props.href}>
          View More
        </MyLink>
      </FlexWrapper>
    </S.SlideCard>
  );
};
