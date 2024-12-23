import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Icon } from "../../../../components/Icon";
import { thems } from "../../../../styles/Thems";
import { font } from "../../../../styles/Common";

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
      <FlexWrapper gap={"25px"}>
        <SkillNumber>{props.skillNumber}.</SkillNumber>
        <FlexWrapper direction="column" gap={"5px"}>
          <FlexWrapper gap={"6px"}>
            <Icon
              iconId={props.iconId}
              viewBox={props.viewBox || "0 0 50 50"}
              height={props.height || "20px"}
              width={props.width || "20px"}
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

const StyledCard = styled.div``;

const SkillNumber = styled.h4`
  padding-top: 14px;
  ${font({
    weight: 100,
    color: thems.colors.text.second,
    Fmin: 45,
    Fmax: 70,
  })}
`;

const SkillTitle = styled.h3`
  align-self: start;
  ${font({
    weight: 300,
    color: thems.colors.text.second,
    Fmin: 20,
    Fmax: 25,
  })}
  word-spacing: nowrap;
`;

const SkillDescription = styled.p`
  ${font({
    weight: 200,
    color: thems.colors.text.second,
    Fmin: 14,
    Fmax: 18,
  })}
`;
