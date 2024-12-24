import React from "react";
import { S } from "./About_Styles";
import { Title } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Fade } from "react-awesome-reveal";

import Tree from "../../../assets/img/Bonsai.jpg";
import Snowboard from "../../../assets/img/Snow.jpg";

export const About: React.FC = () => {
  return (
    <S.About id={"about"}>
      <Container>
        <FlexWrapper gap={60} justify="space-between">
          <S.Bonsai>
            <Title color={"second"}>About Me</Title>
            <S.DescriptionSpan>Growing Bonsai</S.DescriptionSpan>
            <S.DescriptionBonsai>
              This hobby helps me develop patience and attention to detail. I
              enjoy the process of shaping and caring for these miniature trees,
              which teaches me to plan and care for long-term result
            </S.DescriptionBonsai>
            <Fade cascade={true}>
              <S.AboutImg src={Tree} alt="bonsaiImg"></S.AboutImg>
            </Fade>
          </S.Bonsai>
          <S.Snow>
            <S.DescriptionSpan>Snow in winter</S.DescriptionSpan>
            <S.DescriptionSnow>
              brings me special joy and teaches me to conquer new heights -
              after all, it’s snowboarding time;) it helps me develop physical
              endurance and maintains team spirit when we ride with friends
            </S.DescriptionSnow>
            <Fade cascade={true}>
              <S.AboutImg src={Snowboard} alt="snowboardImg"></S.AboutImg>
            </Fade>
          </S.Snow>
        </FlexWrapper>
      </Container>
    </S.About>
  );
};
