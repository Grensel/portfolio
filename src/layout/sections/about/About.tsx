import styled from "styled-components";
import { Title } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { thems } from "../../../styles/Thems";

import Tree from "../../../assets/img/Bonsai.jpg";
import Snowboard from "../../../assets/img/Snow.jpg";

export const About = () => {
  return (
    <StyledAbout>
      <Container>
        <FlexWrapper gap={"60px"} wrap={"wrap"} justify="space-between">
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

const StyledAbout = styled.section``;

const Snow = styled.div`
  max-width: 440px;
`;

const Bonsai = styled.div`
  max-width: 540px;
`;
const DescriptionBonsai = styled.p`
  width: 80%;
  margin-bottom: 150px;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: ${thems.colors.text.additional};
`;

const DescriptionSnow = styled.p`
  margin-bottom: 150px;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: ${thems.colors.text.additional};
`;

const DescriptionSpan = styled.span`
  font-family: "Epilogue" sans-serif;
  font-size: 32px;
  font-weight: 254;
  color: ${thems.colors.text.additional};
`;

const AboutImg = styled.img`
  width: 100%;
`;
