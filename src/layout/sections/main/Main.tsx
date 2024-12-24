import { FlexWrapper } from "../../../components/FlexWrapper";
import myphoto from "../../../assets/img/photo.png";
import React from "react";
import { S } from "./Main_Styled";
import Typewriter from "typewriter-effect";

export const Main: React.FC = () => {
  return (
    <S.Mein id={"main"}>
      <FlexWrapper align="center">
        <FlexWrapper direction={"column"}>
          <S.MainTitel>
            HELLO <br />
            I&apos;M SERGEY
          </S.MainTitel>
          <S.Description>
            FRONT-END
            <Typewriter
              options={{
                strings: ["DEVELOPER"],
                autoStart: true,
                loop: true,
              }}
            ></Typewriter>
            <p>front-end developer</p>
          </S.Description>
        </FlexWrapper>
        <S.BackSquare>
          <S.MyPhoto src={myphoto} alt={"it's me"} />
        </S.BackSquare>
      </FlexWrapper>
    </S.Mein>
  );
};
