import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import photo from "../../../assets/img/photo.png";
import { thems } from "../../../styles/Thems";

export const Main = () => {
  return (
    <StyledMein>
      <FlexWrapper justify={"center"} align="center" wrap="wrap">
        <FlexWrapper direction={"column"} justify={"center"} align="center">
          <MainTitel>
            HELLO <br />
            I&apos;M SERGEY
          </MainTitel>
          <Description>
            FRONT-END <br /> DEVELOPER
          </Description>
        </FlexWrapper>
        <BackSquare>
          <Photo src={photo} alt={"it's me"} />
        </BackSquare>
      </FlexWrapper>
    </StyledMein>
  );
};

export const StyledMein = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Photo = styled.img`
  max-width: 470px;
  rotate: 16.2deg;
  background-color: ${thems.colors.background.photo};
`;

const BackSquare = styled.div`
  position: relative;
  right: 120px;
  max-width: 470px;
  background-color: ${thems.colors.background.pseudo};
  rotate: -8.7deg;
`;

const MainTitel = styled.span`
  z-index: 1;
  color: ${thems.colors.text.title};
  font-family: "Epilogue", sans-serif;
  font-weight: 800;
  font-size: 130px;
`;

const Description = styled.h1`
  z-index: 1;
  color: ${thems.colors.text.title};
`;
