import { FlexWrapper } from "../../../components/FlexWrapper";
import myphoto from "../../../assets/img/photo.png";
import React from "react";
import { S } from "./Main_Styled";

export const Main: React.FC = () => {
  return (
    <S.Mein>
      <FlexWrapper justify={"center"} align="center">
        <FlexWrapper direction={"column"} justify={"center"} align="center">
          <S.MainTitel>
            HELLO <br />
            I&apos;M SERGEY
          </S.MainTitel>
          <S.Description>
            FRONT-END <br /> DEVELOPER
          </S.Description>
        </FlexWrapper>
        <S.BackSquare>
          <S.MyPhoto src={myphoto} alt={"it's me"} />
        </S.BackSquare>
      </FlexWrapper>
    </S.Mein>
  );
};
