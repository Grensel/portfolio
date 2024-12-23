import styled from "styled-components";
import { Title } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { thems } from "../../../styles/Thems";

import Tree from "../../../assets/img/Bonsai.jpg";
import Snowboard from "../../../assets/img/Snow.jpg";
import { font } from "../../../styles/Common";

export const About = () => {
  return (
    <StyledAbout>
      <Container>
        <FlexWrapper gap={60} justify="space-between">
          <Bonsai>
            <Title color={"second"}>About Me</Title>
            <DescriptionSpan>Growing Bonsai:</DescriptionSpan>
            <DescriptionBonsai>
              This hobby helps me develop patience and attention to detail. I
              enjoy the process of shaping and caring for these miniature trees,
              which teaches me to plan and care for long-term result
            </DescriptionBonsai>
            <AboutImg src={Tree} alt="bonsaiImg"></AboutImg>
          </Bonsai>
          <Snow>
            <DescriptionSpan>Snow in winter</DescriptionSpan>
            <DescriptionSnow>
              brings me special joy and teaches me to conquer new heights -
              after all, it’s snowboarding time;) it helps me develop physical
              endurance and maintains team spirit when we ride with friends
            </DescriptionSnow>
            <AboutImg src={Snowboard} alt="snowboardImg"></AboutImg>
          </Snow>
        </FlexWrapper>
      </Container>
    </StyledAbout>
  );
};

const StyledAbout = styled.section`
  ${FlexWrapper} {
    @media ${thems.media.tablet} {
      flex-wrap: wrap;
    }
  }
`;

const Snow = styled.div`
  max-width: 440px;
  @media ${thems.media.tablet} {
    max-width: none;
  }
`;

const Bonsai = styled.div`
  max-width: 540px;
  @media ${thems.media.tablet} {
    max-width: none;
  }
`;
const DescriptionBonsai = styled.p`
  width: 80%;
  margin-bottom: 150px;
  ${font({
    family: "Roboto",
    weight: 400,
    color: thems.colors.text.additional,
    lineHeight: "27px",
  })}
  font-size: 18px;

  @media ${thems.media.tablet} {
    margin-bottom: 50px;
  }
`;

const DescriptionSnow = styled.p`
  margin-bottom: 150px;
  ${font({
    family: "Roboto",
    weight: 400,
    color: thems.colors.text.additional,
    lineHeight: "27px",
  })}
  font-size: 18px;

  @media ${thems.media.tablet} {
    margin-bottom: 50px;
  }
`;

const DescriptionSpan = styled.span`
  ${font({
    weight: 254,
    color: thems.colors.text.additional,
    lineHeight: "70px",
    Fmax: 48,
    Fmin: 43,
  })}
`;

const AboutImg = styled.img`
  width: 100%;
  @media ${thems.media.tablet} {
    width: 80%;
  }
`;
