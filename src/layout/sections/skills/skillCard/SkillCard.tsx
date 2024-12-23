import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Icon } from "../../../../components/Icon";
import { thems } from "../../../../styles/Thems";
import React from "react";
import { S } from "../Skills_Styles";

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

export const SkillCard: React.FC<SkillCardPropsType> = (
  props: SkillCardPropsType
) => {
  return (
    <S.Card>
      <FlexWrapper gap={25}>
        <S.SkillNumber>{props.skillNumber}.</S.SkillNumber>
        <FlexWrapper direction="column" gap={5}>
          <FlexWrapper gap={6}>
            <Icon
              iconId={props.iconId}
              viewBox={props.viewBox || "0 0 50 50"}
              height={props.height || "20"}
              width={props.width || "20"}
              fill={props.fill || `${thems.colors.text.second}`}
            />
            <S.SkillTitle>{props.skillTitle}</S.SkillTitle>
          </FlexWrapper>
          <S.SkillDescription>{props.description}</S.SkillDescription>
        </FlexWrapper>
      </FlexWrapper>
    </S.Card>
  );
};
