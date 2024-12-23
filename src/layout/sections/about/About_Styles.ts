import { font } from "./../../../styles/Common";
import styled from "styled-components";
import { thems } from "../../../styles/Thems";
import { FlexWrapper } from "../../../components/FlexWrapper";

const About = styled.section`
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

export const S = {
  About,
  Snow,
  Bonsai,
  DescriptionBonsai,
  DescriptionSnow,
  DescriptionSpan,
  AboutImg,
};
