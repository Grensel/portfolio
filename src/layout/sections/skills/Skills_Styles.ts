import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { font } from "../../../styles/Common";
import { thems } from "../../../styles/Thems";

// Skills
const Skills = styled.section`
  padding: 100px 30px;
  ${FlexWrapper} {
    max-width: 1500px;
  }
`;

const GridBox = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(315px, auto));
  gap: 60px 10px;
`;

//Skills Card

const Card = styled.div``;

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

export const S = {
  Skills,
  GridBox,
  Card,
  SkillNumber,
  SkillTitle,
  SkillDescription,
};
