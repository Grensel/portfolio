import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Icon } from "../../../../components/Icon";
import { thems } from "../../../../styles/Thems";

type SkillCardPropsType = {
  skillNumber: string;
  iconId: string;
  viewBox?: string;
  height?: string;
  width?: string;
  fill?: string;
  skillTitle: string;
  description: string;
};

export const SkillCard = (props: SkillCardPropsType) => {
  return (
    <StyledCard>
      <FlexWrapper gap={"34px"}>
        <SkillNumber>{props.skillNumber}.</SkillNumber>
        <FlexWrapper direction="column" gap={"2px"}>
          <FlexWrapper gap={"10px"}>
            <Icon
              iconId={props.iconId}
              viewBox={props.viewBox || "0 0 50 50"}
              height={props.height || "30px"}
              width={props.width || "30px"}
              fill={props.fill || `${thems.colors.text.second}`}
            />
            <SkillTitle>{props.skillTitle}</SkillTitle>
          </FlexWrapper>
          <SkillDescription>{props.description}</SkillDescription>
        </FlexWrapper>
      </FlexWrapper>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  max-width: 440px;
  max-height: 146px;
`;

const SkillNumber = styled.h4`
  width: 80px;
  padding-top: 14px;
  font-family: "Epilogue", sans-serif;
  font-size: 70px;
  font-weight: 100;
  color: ${thems.colors.text.second};
`;

const SkillTitle = styled.h3`
  align-self: start;
  font-family: "Epilogue", sans-serif;
  font-size: 30px;
  font-weight: 300;
  color: ${thems.colors.text.second};
`;

const SkillDescription = styled.p`
  font-family: "Epilogue", sans-serif;
  font-size: 18px;
  font-weight: 200;
  line-height: 22.14px;
  color: ${thems.colors.text.second};
`;
