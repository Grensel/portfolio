import styled from "styled-components";
import { font } from "../../../styles/Common";
import { thems } from "../../../styles/Thems";

const Project = styled.section``;

//Project Card

const ProjectCard = styled.div<{ urlImg?: string }>`
  display: flex;
  gap: 85px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)),
    url(${(props) => props.urlImg || null}) no-repeat;
  background-size: cover;
  padding: 94px 46px 100px;
  @media ${thems.media.tablet} {
    flex-direction: column;
    gap: 24px;
    padding: 66px 15px 80px;
  }
`;

const ProjectTypeName = styled.h3`
  ${font({ weight: 600, color: thems.colors.text.second, Fmin: 15, Fmax: 16 })}
`;

const ProjectTitle = styled.h4`
  max-width: 430px;
  ${font({
    weight: 800,
    color: thems.colors.text.second,
    Fmin: 43,
    Fmax: 45,
  })}
`;

const Bigspan = styled.span`
  ${font({
    weight: 200,
    color: thems.colors.text.second,
    Fmin: 43,
    Fmax: 45,
  })}
`;

const ProjectDiscription = styled.p`
  max-width: 433px;
  margin-top: 38px;

  @media ${thems.media.tablet} {
    margin-top: 0;
    max-width: 600px;
  }

  ${font({
    weight: 400,
    color: thems.colors.text.second,
    Fmin: 17,
    Fmax: 18,
    lineHeight: "25px",
  })}
`;

const Slider = styled.div``;

const SlideCard = styled.div<{ urlImg?: string }>`
  /* display: none; */
  display: flex;
  gap: 85px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)),
    url(${(props) => props.urlImg || null}) no-repeat;
  background-size: cover;
  padding: 94px 46px 100px;
  @media ${thems.media.tablet} {
    flex-direction: column;
    gap: 24px;
    padding: 66px 15px 80px;
  }
`;

export const S = {
  Project,
  ProjectCard,
  ProjectTypeName,
  ProjectTitle,
  Bigspan,
  ProjectDiscription,
  Slider,
  SlideCard,
};
