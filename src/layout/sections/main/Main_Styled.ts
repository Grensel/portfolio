import styled from "styled-components";
import { font } from "../../../styles/Common";
import { thems } from "../../../styles/Thems";
import { FlexWrapper } from "../../../components/FlexWrapper";

const Mein = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  ${FlexWrapper} {
    padding: 20px;

    @media ${thems.media.laptop} {
      flex-direction: column;
    }
  }
`;

const MyPhoto = styled.img`
  width: clamp(
    250px,
    calc((100vw - 375px) / (1440 - 375) * (470 - 250) + 250px),
    470px
  );
  rotate: 16.2deg;
  background-color: ${thems.colors.background.photo};
  object-fit: contain;
`;

const BackSquare = styled.div`
  position: relative;
  right: 100px;
  width: clamp(
    250px,
    calc((100vw - 375px) / (1440 - 375) * (470 - 250) + 250px),
    470px
  );
  background-color: ${thems.colors.background.pseudo};
  rotate: -8.7deg;

  @media ${thems.media.laptop} {
    position: static;
  }
`;

const MainTitel = styled.span`
  z-index: 1;
  ${font({
    color: `${thems.colors.text.title}`,
    weight: 800,
    Fmax: 134,
    Fmin: 50,
  })};
`;

const Description = styled.h1`
  z-index: 1;
`;

export const S = {
  Mein,
  MyPhoto,
  BackSquare,
  MainTitel,
  Description,
};
