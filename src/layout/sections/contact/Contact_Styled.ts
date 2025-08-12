import styled from "styled-components";
import { thems } from "../../../styles/Thems";
import { font } from "../../../styles/Common";

const Contact = styled.section``;

const ContactBox = styled.div`
  width: 45%;
  @media ${thems.media.tablet} {
    width: 100%;
  }
`;

const ContactTitle = styled.h3`
  ${font({
    weight: 600,
    color: thems.colors.text.title,
    Fmin: 44,
    Fmax: 50,
  })}
`;

const MapTitle = styled.h3`
  display: none;
  ${font({
    weight: 600,
    color: thems.colors.text.title,
    Fmin: 44,
    Fmax: 50,
  })}
  @media ${thems.media.tablet} {
    display: inline;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  height: 100%;
  padding: 20px;
  gap: 16px;
  background-color: ${thems.colors.background.pseudo};

  textarea {
    resize: none;

    @media ${thems.media.tablet} {
      min-height: 100px;
    }
  }

  @media ${thems.media.tablet} {
    align-self: center;
  }
`;

const Field = styled.input`
  background-color: ${thems.colors.background.photo};
  color: ${thems.colors.footer};
  padding: 10px 20px;
  width: 100%;
  height: 100%;
  border: none;

  &::placeholder {
    color: ${thems.colors.text.pseudo};
    text-transform: capitalize;
  }

  &:focus-visible {
    outline: 1px solid ${thems.colors.background.second};
  }
`;

const FieldTitle = styled.label`
  color: ${thems.colors.text.title};
`;

const GoogleMap = styled.map`
  align-self: center;
  width: 100%;
  aspect-ratio: 1/1;
  @media ${thems.media.tablet} {
    max-width: 70%;
  }
`;

export const S = {
  Contact,
  ContactBox,
  ContactTitle,
  MapTitle,
  StyledForm,
  Field,
  FieldTitle,
  GoogleMap,
};
